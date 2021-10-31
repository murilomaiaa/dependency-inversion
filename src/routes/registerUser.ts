import { Request, Response } from "express";
import { NodemailerEmailProvider } from "../providers/NodemailerEmailProvider";
import { SendWelcomeEmailService } from "../services";

export const registerUser =async  (request: Request, response: Response) =>{
  const { name, email } = request.body
  
  // validations and other business rules

  const mailProvider = new NodemailerEmailProvider();
  const sendWelcomeEmail = new SendWelcomeEmailService(mailProvider);

  await sendWelcomeEmail.execute(email, name)

  return response.status(201).json({ id: 'some-id' })
} 