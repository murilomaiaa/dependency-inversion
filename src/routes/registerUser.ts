import { Request, Response } from "express";
import { NodemailerMailProvider } from "../providers";
import { SendWelcomeEmailService } from "../services";

export const registerUser =async  (request: Request, response: Response) =>{
  const { name, email } = request.body
  
  // validations and other business rules

  const mailProvider = new NodemailerMailProvider();
  const sendWelcomeEmail = new SendWelcomeEmailService(mailProvider);

  await sendWelcomeEmail.execute(email, name)

  return response.status(201).json({ id: 'some-id' })
} 