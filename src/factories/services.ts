import { makeIMailProvider } from ".";
import { SendForgotPasswordEmailService, SendWelcomeEmailService } from "../services";

const mailProvider = makeIMailProvider();

export function makeSendWelcomeEmailService() {
  return new SendWelcomeEmailService(mailProvider)
}

export function makeSendForgotPasswordEmailService() {
  return new SendForgotPasswordEmailService(mailProvider)
}