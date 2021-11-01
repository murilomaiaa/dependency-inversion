import { IMailProvider } from "../providers";

export class SendForgotEmailService {
private mailProvider: IMailProvider

constructor(mailProvider: IMailProvider){
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