import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import proxy from 'express-http-proxy';

const app = express();
const PORT = process.env.PORT || 8000;
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://auth-service:5000';

app.use('/auth', proxy(AUTH_SERVICE_URL));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
