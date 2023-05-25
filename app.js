const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const shopsRouter = require('./routes/shops');
const orderRouter = require('./routes/orders');
require('dotenv').config();

// UTILS & LOGGERS
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,  Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));
app.use(express.json());


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