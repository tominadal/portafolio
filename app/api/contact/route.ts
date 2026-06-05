import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email to Owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tomasnadal04@gmail.com',
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de portafolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // 2. Auto-reply to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Confirmación: Recibí tu mensaje - Tomás Nadal`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h2>¡Hola ${name}!</h2>
          <p>Gracias por ponerte en contacto. Quería confirmarte que recibí tu mensaje correctamente y que lo leeré a la brevedad.</p>
          <p>Te responderé lo más pronto posible.</p>
          <br/>
          <p>Saludos,</p>
          <p><strong>Tomás Nadal</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Hubo un error enviando el mensaje. Inténtalo más tarde.' },
      { status: 500 }
    );
  }
}
