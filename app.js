const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const shopsRouter = require('./routes/shops');
const orderRouter = require('./routes/orders');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// UTILS & LOGGERS
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(express.json());

// ROUTES
app.use('/delivery/shops', shopsRouter);
app.use('/delivery/orders', orderRouter)
app.use((_, res) => {
  res.status(404).json({ message: 'Default route 404' });
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  const { status = 500, message = 'Server ERROR' } = err;
  res.status(status).json({ message });
});

module.exports = app;