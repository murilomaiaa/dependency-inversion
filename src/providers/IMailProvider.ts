export type SendMailParams = {
  to: string
  subject: string
  text: string
  html: string
} 

export interface IMailProvider {
  sendMail(params: SendMailParams): Promise<void>
}