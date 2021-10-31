import { NodemailerEmailProvider } from "../providers/NodemailerEmailProvider";

export class SendWelcomeEmailService {
  private mailProvider: NodemailerEmailProvider

  constructor(mailProvider: NodemailerEmailProvider){
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