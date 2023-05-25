const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const shopsRouter = require('./routes/shops');
const orderRouter = require('./routes/orders');
require('dotenv').config();

const corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200,
  credentials: true 
};

// UTILS & LOGGERS
const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use(express.json());
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

// ROUTES
app.use('/delivery', shopsRouter);
app.use('/delivery', orderRouter)
app.use((_, res) => {
  res.status(404).json({ message: 'Default route 404' });
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  const { status = 500, message = 'Server ERROR' } = err;
  res.status(status).json({ message });
});

module.exports = app;