const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const shopsRouter = require('./routes/shops');
// const productsRouter = require('./routes/products');
// const reviewsRouter = require('./routes/reviews');
// const newsRouter = require('./routes/news');
// const authRouter = require('./routes/auth');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
// app.use(express.static("public"));

app.use('/shops', shopsRouter);
// app.use('/reviews', reviewsRouter);
// app.use('/news', newsRouter);
// app.use('/auth', authRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server ERROR' } = err;
  res.status(status).json({ message });
});

module.exports = app;