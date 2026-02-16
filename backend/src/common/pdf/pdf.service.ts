import { Injectable } from '@nestjs/common';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

type AdmissionDocumentPayload = {
  fullName: string;
  nationalId: string;
  departmentRequested: string;
  studyType: string;
  submittedAt: Date;
  applicationCode: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

@Injectable()
export class PdfService {
  private loadFontBase64(filePath: string) {
    try {
      const data = fs.readFileSync(filePath);
      return data.toString('base64');
    } catch {
      return null;
    }
  }

  private resolveLogoBase64() {
    const candidatePaths = [
      process.env.ADMISSIONS_LOGO_PATH,
      path.resolve(process.cwd(), 'public', 'images', 'logo.webp'),
      path.resolve(
        process.cwd(),
        '..',
        'frontend',
        'public',
        'images',
        'logo.webp'
      ),
      path.resolve(__dirname, '../../../frontend/public/images/logo.webp'),
    ].filter(Boolean) as string[];

    for (const candidate of candidatePaths) {
      if (!candidate) continue;
      try {
        if (fs.existsSync(candidate)) {
          const buffer = fs.readFileSync(candidate);
          return `data:image/webp;base64,${buffer.toString('base64')}`;
        }
      } catch {
        continue;
      }
    }
    return null;
  }

  async generateAdmissionPdf(payload: AdmissionDocumentPayload): Promise<Buffer> {
    const cairoRegularPath = path.resolve(
      process.cwd(),
      'node_modules',
      '@fontsource',
      'cairo',
      'files',
      'cairo-arabic-400-normal.woff2'
    );
    const cairoBoldPath = path.resolve(
      process.cwd(),
      'node_modules',
      '@fontsource',
      'cairo',
      'files',
      'cairo-arabic-700-normal.woff2'
    );

    const cairoRegular = this.loadFontBase64(cairoRegularPath);
    const cairoBold = this.loadFontBase64(cairoBoldPath);
    const logo = this.resolveLogoBase64();

    const submittedAt = new Intl.DateTimeFormat('ar-LY', {
      dateStyle: 'long',
    }).format(payload.submittedAt);

    const html = `
      <!doctype html>
      <html lang="ar" dir="rtl">
        <head>
          <meta charset="utf-8" />
          <style>
            ${cairoRegular ? `@font-face { font-family: "Cairo"; src: url(data:font/woff2;base64,${cairoRegular}) format("woff2"); font-weight: 400; font-style: normal; }` : ''}
            ${cairoBold ? `@font-face { font-family: "Cairo"; src: url(data:font/woff2;base64,${cairoBold}) format("woff2"); font-weight: 700; font-style: normal; }` : ''}
            :root { --navy: #001f3f; --gold: #c5a059; }
            * { box-sizing: border-box; }
            body { margin: 0; font-family: "Cairo", "Tahoma", sans-serif; color: var(--navy); background: #f8f9fa; }
            .page { padding: 40px 48px; background: #fff; border: 2px solid rgba(0,31,63,0.15); border-radius: 20px; }
            .header { display: flex; align-items: center; justify-content: space-between; gap: 16px; border-bottom: 1px solid rgba(0,31,63,0.1); padding-bottom: 16px; }
            .logo { width: 72px; height: 72px; border-radius: 50%; border: 1px solid rgba(0,31,63,0.2); display: flex; align-items: center; justify-content: center; background: #fff; }
            .logo img { width: 48px; height: 48px; object-fit: contain; }
            .titles { text-align: center; flex: 1; }
            .titles h1 { margin: 0; font-size: 20px; font-weight: 700; }
            .titles p { margin: 4px 0 0; font-size: 12px; color: rgba(0,31,63,0.7); letter-spacing: 0.04em; }
            .code-box { min-width: 180px; padding: 12px 16px; border-radius: 14px; border: 1px solid rgba(197,160,89,0.35); background: rgba(197,160,89,0.12); text-align: center; }
            .code-box span { display: block; font-size: 11px; color: rgba(0,31,63,0.7); }
            .code-box strong { font-size: 14px; letter-spacing: 0.08em; }
            .content { margin-top: 24px; display: grid; gap: 16px; }
            .row { display: flex; justify-content: space-between; padding: 12px 16px; border-radius: 14px; background: #f8f9fa; border: 1px solid rgba(0,31,63,0.08); font-size: 14px; }
            .row span { color: rgba(0,31,63,0.65); }
            .row strong { font-weight: 700; }
            .stamp { margin-top: 28px; display: inline-flex; align-items: center; justify-content: center; width: 140px; height: 140px; border-radius: 999px; border: 2px dashed var(--gold); color: var(--gold); font-weight: 700; text-align: center; padding: 12px; line-height: 1.5; }
            .footer { margin-top: 24px; display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: rgba(0,31,63,0.7); }
          </style>
        </head>
        <body>
          <div class="page">
            <div class="header">
              <div class="logo">${logo ? `<img src="${logo}" alt="logo" />` : ''}</div>
              <div class="titles">
                <h1>جامعة الحاضرة</h1>
                <p>بوابة القبول والتسجيل - وثيقة تقديم رسمية</p>
              </div>
              <div class="code-box">
                <span>كود الوثيقة</span>
                <strong>${escapeHtml(payload.applicationCode)}</strong>
              </div>
            </div>

            <div class="content">
              <div class="row">
                <span>الاسم الكامل</span>
                <strong>${escapeHtml(payload.fullName)}</strong>
              </div>
              <div class="row">
                <span>الرقم الوطني</span>
                <strong>${escapeHtml(payload.nationalId)}</strong>
              </div>
              <div class="row">
                <span>التخصص المختار</span>
                <strong>${escapeHtml(payload.departmentRequested)}</strong>
              </div>
              <div class="row">
                <span>نوع الدراسة</span>
                <strong>${escapeHtml(payload.studyType)}</strong>
              </div>
              <div class="row">
                <span>تاريخ التقديم</span>
                <strong>${escapeHtml(submittedAt)}</strong>
              </div>
            </div>

            <div class="stamp">الختم الرقمي<br/>جامعة الحاضرة</div>

            <div class="footer">
              <span>الوثيقة صادرة إلكترونياً من بوابة القبول</span>
              <span>info@alhadhra.edu.ly</span>
            </div>
          </div>
        </body>
      </html>
    `;

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
    });
    await browser.close();
    return buffer;
  }
}
