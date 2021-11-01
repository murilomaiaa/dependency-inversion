import { IMailProvider, NodemailerMailProvider } from "providers";

export function makeIMailProvider(): IMailProvider {
  return new NodemailerMailProvider()
}
