import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv"
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

dotenv.config()

export const mailtrapClient = new MailtrapClient({
    token: process.env.MAILTRAP_TOKEN,
});

//name server
export const sender = {
    email: "hello@demomailtrap.com",
    name: "Authentication",
};

//name recipient
// const recipients = [
//     {
//         email: "lebao210203@gmail.com",
//     }
// ];

// //content sended
// mailtrapClient
//     .send({
//         from: sender,
//         to: recipients,
//         subject: "You are awesome!",
//         html: VERIFICATION_EMAIL_TEMPLATE,
//         category: "Integration Test",
//     })
//     .then(console.log, console.error);