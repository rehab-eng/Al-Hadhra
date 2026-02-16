import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer from 'nodemailer';

type MailPayload = {
  to: string;
  subject: string;
  html: string;
  attachments?: {
    filename: string;
    content: Buffer;
    contentType?: string;
  }[];
};

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;
  private fromAddress: string;

  constructor(private readonly configService: ConfigService) {
    const host = this.configService.get<string>('SMTP_HOST');
    const port = Number(this.configService.get<string>('SMTP_PORT') ?? 587);
    const user = this.configService.get<string>('SMTP_USER');
    const pass = this.configService.get<string>('SMTP_PASS');
    const secure = port === 465;

    if (!host || !user || !pass) {
      throw new Error('SMTP credentials are missing in environment variables.');
    }

    this.fromAddress =
      this.configService.get<string>('SMTP_FROM') || user;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  }

  async send(payload: MailPayload) {
    await this.transporter.sendMail({
      from: this.fromAddress,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      attachments: payload.attachments,
    });
  }
}
