const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const shopsRouter = require('./routes/shops');
const orderRouter = require('./routes/orders');
require('dotenv').config();

const corsOptions = {
  origin: 'http://localhost:3000/deliveri/order',
  optionsSuccessStatus: 200,
  credentials: true  
}
const app = express();
app.use(cors(corsOptions));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// UTILS & LOGGERS
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
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