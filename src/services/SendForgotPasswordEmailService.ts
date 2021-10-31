import { NodemailerEmailProvider } from "../providers/NodemailerEmailProvider";

export class SendForgotEmailService {
  private mailProvider: NodemailerEmailProvider

  constructor(mailProvider: NodemailerEmailProvider){
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