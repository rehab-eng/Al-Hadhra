import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MailService } from '../../common/mail/mail.service';
import { PdfService } from '../../common/pdf/pdf.service';
import { CreateAdmissionDto } from './dto/create-admission.dto';

@Injectable()
export class AdmissionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
    private readonly pdfService: PdfService
  ) {}

  private buildApplicationCode(sequence: number, submittedAt: Date) {
    const year = submittedAt.getFullYear();
    const padded = String(sequence).padStart(4, '0');
    return `HAD-${year}-${padded}`;
  }

  async apply(dto: CreateAdmissionDto) {
    try {
      const result = await this.prisma.$transaction(async (tx) => {
        const created = await tx.admissionApplication.create({
          data: {
            fullName: dto.fullName,
            email: dto.email,
            nationalId: dto.nationalId,
            departmentRequested: dto.departmentRequested,
            studyType: dto.studyType,
          },
        });

        const applicationCode = this.buildApplicationCode(
          created.sequence,
          created.submittedAt
        );

        const updated = await tx.admissionApplication.update({
          where: { id: created.id },
          data: { applicationCode },
        });

        return { ...updated, applicationCode };
      });

      const pdfBuffer = await this.pdfService.generateAdmissionPdf({
        fullName: result.fullName,
        nationalId: result.nationalId,
        departmentRequested: result.departmentRequested,
        studyType: result.studyType,
        submittedAt: result.submittedAt,
        applicationCode: result.applicationCode ?? '',
      });

      const fileName = `Admission-${result.applicationCode}.pdf`;

      const universityEmail =
        process.env.ADMISSIONS_EMAIL || 'info@alhadhra.edu.ly';

      const sendToUniversity =
        dto.sendToUniversityEmail === undefined
          ? true
          : dto.sendToUniversityEmail;
      const sendToStudent =
        dto.sendToStudentEmail === undefined ? true : dto.sendToStudentEmail;

      const mailHtml = `
        <div style="font-family:Tahoma, Arial, sans-serif; direction: rtl;">
          <h3>طلب قبول جديد - جامعة الحاضرة</h3>
          <p>تم استلام طلب جديد عبر بوابة القبول.</p>
          <ul>
            <li><strong>الاسم الكامل:</strong> ${result.fullName}</li>
            <li><strong>الرقم الوطني:</strong> ${result.nationalId}</li>
            <li><strong>التخصص المختار:</strong> ${result.departmentRequested}</li>
            <li><strong>نوع الدراسة:</strong> ${result.studyType}</li>
            <li><strong>كود الوثيقة:</strong> ${result.applicationCode}</li>
          </ul>
        </div>
      `;

      if (sendToUniversity) {
        await this.mailService.send({
          to: universityEmail,
          subject: `طلب قبول جديد - ${result.applicationCode}`,
          html: mailHtml,
          attachments: [
            {
              filename: fileName,
              content: pdfBuffer,
              contentType: 'application/pdf',
            },
          ],
        });
      }

      if (sendToStudent) {
        await this.mailService.send({
          to: result.email,
          subject: `تأكيد طلب القبول - ${result.applicationCode}`,
          html: `
            <div style="font-family:Tahoma, Arial, sans-serif; direction: rtl;">
              <h3>تم استلام طلبك بنجاح</h3>
              <p>نشكر لك تقديم طلب الالتحاق بجامعة الحاضرة.</p>
              <p>كود الوثيقة الخاصة بك: <strong>${result.applicationCode}</strong></p>
              <p>مرفق نسخة من الوثيقة الرسمية.</p>
            </div>
          `,
          attachments: [
            {
              filename: fileName,
              content: pdfBuffer,
              contentType: 'application/pdf',
            },
          ],
        });
      }

      return {
        applicationId: result.id,
        applicationCode: result.applicationCode,
        submittedAt: result.submittedAt,
        fileName,
        documentBase64: pdfBuffer.toString('base64'),
        documentMimeType: 'application/pdf',
      };
    } catch (error: any) {
      if (error?.code === 'P2002') {
        throw new ConflictException('National ID already exists.');
      }
      throw new InternalServerErrorException(
        'Failed to process admission request.'
      );
    }
  }
}
