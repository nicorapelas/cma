const express = require('express');
const { validateContact } = require('../middleware/validateContact');
const { sendContactEmail } = require('../services/mailer');

const router = express.Router();

router.post('/', validateContact, async (req, res) => {
  try {
    const result = await sendContactEmail(req.contact);

    return res.status(201).json({
      ok: true,
      message: 'Thank you — your message has been received. We will be in touch soon.',
      delivered: result.delivered,
    });
  } catch (error) {
    console.error('[contact] Failed to send message:', error);
    return res.status(500).json({
      ok: false,
      message: 'Unable to send your message right now. Please try again later or email us directly.',
    });
  }
});

module.exports = router;
