import { Request, Response } from "express";
import { SendForgotEmailService } from "../services";
import { SESMailProvider } from "../providers";

export const forgotPassword = async (request: Request, response: Response) =>{
  const { email } = request.body
  
  // validations and other business rules

const mailProvider = new SESMailProvider();
  const sendWelcomeEmail = new SendForgotEmailService(mailProvider);

  await sendWelcomeEmail.execute(email)

  return response.status(204).json()
} 