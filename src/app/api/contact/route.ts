import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, number, email, message } = body;

        if (!name || !number || !email || !message) {
            return NextResponse.json(
                { success: false, message: 'All fields are required.' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.GMAIL_EMAIL as string,
                pass: process.env.GMAIL_APP_PASSWORD as string,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_EMAIL as string,
            to: process.env.GMAIL_EMAIL as string,
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}\n
        Phone Number: ${number}\n
        Email: ${email}\n
        Message: ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${number}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send email.' },
            { status: 500 }
        );
    }
}
