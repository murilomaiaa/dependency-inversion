import nodemailer, { Transporter } from 'nodemailer';
import aws from 'aws-sdk';

type SendMailParams = {
  to: string
  subject: string
  text: string
  html: string
} 

export class SESMailProvider  {
  private client: Transporter;

  constructor() {
    this.client = nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: '2010-12-01',
        region: 'us-east-1',
      }),
    });
  }

  public async sendMail({
    to,
    subject,
    html,
    text
  }: SendMailParams): Promise<void> {
    await this.client.sendMail({
      from: '"Our Application" <contact@ourapp.com>',
      to,
      subject,
      text,
      html
    });
  }
}