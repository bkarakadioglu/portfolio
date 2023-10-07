"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Checks senderEmail for not null not empty and not above max no
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data:any;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "batuhankarakadioglu@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      html: `<p>${message} Sender is: ${senderEmail}  </p>`
    });

  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
