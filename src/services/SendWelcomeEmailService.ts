import { IMailProvider } from "../providers";

export class SendWelcomeEmailService {
  private mailProvider: IMailProvider

  constructor(mailProvider: IMailProvider){
    this.mailProvider = mailProvider
  }

  public async execute(email: string, name: string): Promise<void> {
   await this.mailProvider.sendMail({
    to: email,
    subject: "Welcome",
    text: `Welcome to our application, ${name}!`,
    html: `<b>Welcome to our application, ${name}!</b>`,  
   })
  }
}