import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 8000;
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:5000';

app.use(morgan('dev'));

app.use(
  '/auth',
  createProxyMiddleware({
    target: AUTH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: (path) => '/auth' + path
  })
);

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
