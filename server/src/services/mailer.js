const nodemailer = require('nodemailer');
const { env, isSmtpConfigured } = require('../config/env');

const INQUIRY_LABELS = {
  general: 'General enquiry',
  tour: 'Book a tour',
  enrolment: 'Enrolment enquiry',
};

function buildContactEmail({ name, email, phone, inquiryType, message }) {
  const inquiryLabel = INQUIRY_LABELS[inquiryType] || inquiryType;
  const phoneLine = phone ? `Phone: ${phone}\n` : '';

  return {
    subject: `[CMA Contact] ${inquiryLabel} — ${name}`,
    text: [
      `New contact form submission`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      phoneLine,
      `Inquiry type: ${inquiryLabel}`,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n'),
    replyTo: email,
  };
}

async function sendContactEmail(contact) {
  const payload = buildContactEmail(contact);

  if (!isSmtpConfigured()) {
    console.log('[contact] SMTP not configured — submission logged:\n', payload.text);
    return { delivered: false, mode: 'log' };
  }

  const transporter = nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.port === 465,
    auth: {
      user: env.smtp.user,
      pass: env.smtp.pass,
    },
  });

  await transporter.sendMail({
    from: env.contactFrom,
    to: env.contactTo,
    replyTo: payload.replyTo,
    subject: payload.subject,
    text: payload.text,
  });

  return { delivered: true, mode: 'smtp' };
}

module.exports = { sendContactEmail, buildContactEmail };
