const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INQUIRY_TYPES = new Set(['general', 'tour', 'enrolment']);

function validateContactBody(body) {
  const errors = [];
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const inquiryType = typeof body.inquiryType === 'string' ? body.inquiryType.trim() : 'general';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || name.length < 2) {
    errors.push('Name is required (at least 2 characters).');
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.push('A valid email address is required.');
  }

  if (phone && phone.length > 30) {
    errors.push('Phone number is too long.');
  }

  if (!INQUIRY_TYPES.has(inquiryType)) {
    errors.push('Inquiry type must be general, tour, or enrolment.');
  }

  if (!message || message.length < 10) {
    errors.push('Message is required (at least 10 characters).');
  }

  if (message.length > 5000) {
    errors.push('Message is too long (max 5000 characters).');
  }

  return {
    errors,
    value: { name, email, phone, inquiryType, message },
  };
}

function validateContact(req, res, next) {
  const { errors, value } = validateContactBody(req.body || {});

  if (errors.length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  req.contact = value;
  return next();
}

module.exports = { validateContact, validateContactBody };
