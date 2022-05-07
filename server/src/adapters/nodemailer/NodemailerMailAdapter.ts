import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7a3580e4743cc8",
      pass: "cc953548e3f958"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
           await transport.sendMail({
        from: 'Equip Feedget <oi@feedget.com>',
        to: 'Rafael Negri <rafael.negri01@gmail.com>',
        subject,
        html: body,
    });
    }
}