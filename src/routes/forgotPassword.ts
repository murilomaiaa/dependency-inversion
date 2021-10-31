import { Request, Response } from "express";
import { SendForgotEmailService } from "../services";
import { NodemailerEmailProvider } from "../providers/NodemailerEmailProvider";

export const forgotPassword = async (request: Request, response: Response) =>{
  const { email } = request.body
  
  // validations and other business rules

  const mailProvider = new NodemailerEmailProvider();
  const sendWelcomeEmail = new SendForgotEmailService(mailProvider);

  await sendWelcomeEmail.execute(email)

  return response.status(204).json()
} 