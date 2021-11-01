import nodemailer from 'nodemailer'
import { IMailProvider, SendMailParams } from './IMailProvider';

export class NodemailerEmailProvider implements IMailProvider {
  private transporter: nodemailer.Transporter;

  constructor(){
    this.transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, 
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  async sendMail({ html, subject, text, to }: SendMailParams){
    let info = await this.transporter.sendMail({
      from: '"Our Application" <contact@ourapp.com>',
      to,
      subject,
      text,
      html,
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
}