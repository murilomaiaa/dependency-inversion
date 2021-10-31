import nodemailer from 'nodemailer'

type SendMailParams = {
  to: string
  subject: string
  text: string
  html: string
}

export class NodemailerEmailProvider {
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

  async sendMail({html,subject,text,to}: SendMailParams){
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