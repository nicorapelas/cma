require('dotenv').config();

const env = {
  port: Number(process.env.PORT) || 5000,
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  contactTo: process.env.CONTACT_TO || 'admin@cvillemont.co.za',
  contactFrom: process.env.CONTACT_FROM || 'CMA Website <noreply@cvillemont.co.za>',
  smtp: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

function isSmtpConfigured() {
  return Boolean(env.smtp.host && env.smtp.user && env.smtp.pass);
}

module.exports = { env, isSmtpConfigured };
