"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
    console.log("Running on server")
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"));

    const senderEmail = formData.get("senderEmail");
    const subject = formData.get("subject");
    const senderMessage = formData.get("message");

    if (!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender Email",
        }
    }

    if (!validateString(subject, 200)){
        return {
            error: "Invalid Subject",
        }
    }

    if (!validateString(senderMessage, 1000000)){
        return {
            error: "Invalid Message",
        }
    }

    let data
    try{
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['jianhua1203@gmail.com'],
            subject: subject as string,
            react: React.createElement(ContactFormEmail, {
                message: senderMessage as string,
                senderEmail: senderEmail as string,
            }),
            replyTo: senderEmail as string,
        });
    } catch (error: unknown){
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data,
    }
}