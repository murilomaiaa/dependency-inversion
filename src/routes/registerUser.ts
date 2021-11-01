import { Request, Response } from "express";
import { makeSendWelcomeEmailService } from "../factories";

export const registerUser =async  (request: Request, response: Response) =>{
  const { name, email } = request.body
  
  // validations and other business rules

  const sendWelcomeEmail =  makeSendWelcomeEmailService();

  await sendWelcomeEmail.execute(email, name)

  return response.status(201).json({ id: 'some-id' })
} 