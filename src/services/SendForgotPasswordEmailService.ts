import { SESMailProvider } from "../providers";

export class SendForgotEmailService {
  private mailProvider: SESMailProvider

  constructor(mailProvider: SESMailProvider){
    this.mailProvider = mailProvider
  }

  public async execute(email: string): Promise<void> {
   await this.mailProvider.sendMail({
    to: email,
    subject: "Password recovery",
    text: `A password recovery was requested`,
    html: `A <b>password recovery</b> was requested`,  
   })
  }
}