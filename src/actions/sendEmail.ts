"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import { ContactFormEmail } from "@/components/UI";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  // * Simple server side validation
  if (!validateString({ value: email, maxLength: 500 })) {
    return {
      error: "Invalid email",
    };
  }
  if (!validateString({ value: message, maxLength: 5000 })) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "shreyasvaidya963@gmail.com",
      subject: `Contact form query`,
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
