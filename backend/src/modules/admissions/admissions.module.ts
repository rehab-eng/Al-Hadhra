import { Module } from '@nestjs/common';
import { AdmissionsController } from './admissions.controller';
import { AdmissionsService } from './admissions.service';
import { MailService } from '../../common/mail/mail.service';
import { PdfService } from '../../common/pdf/pdf.service';

@Module({
  controllers: [AdmissionsController],
  providers: [AdmissionsService, MailService, PdfService]
})
export class AdmissionsModule {}
