import { Request, Response } from "express";
import { makeSendForgotPasswordEmailService } from "../factories";

export const forgotPassword = async (request: Request, response: Response) =>{
  const { email } = request.body
  
  // validations and other business rules

  const sendForgotPasswordEmail = makeSendForgotPasswordEmailService();

  await sendForgotPasswordEmail.execute(email)

  return response.status(204).json()
} 