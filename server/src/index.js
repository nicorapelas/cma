const express = require('express');
const cors = require('cors');
const { env } = require('./config/env');
const contactRouter = require('./routes/contact');

const app = express();

app.use(cors({ origin: env.clientOrigin }));
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'cma-server' });
});

app.use('/api/contact', contactRouter);

app.use((_req, res) => {
  res.status(404).json({ ok: false, message: 'Not found' });
});

app.use((error, _req, res, _next) => {
  console.error('[server] Unhandled error:', error);
  res.status(500).json({ ok: false, message: 'Internal server error' });
});

app.listen(env.port, () => {
  console.log(`CMA server listening on http://localhost:${env.port}`);
});
