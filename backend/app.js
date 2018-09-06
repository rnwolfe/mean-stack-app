const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');

const app = express();

mongoose.connect('mongodb+srv://mean-app-user:SsC8pOsXpmnpWH12@cluster0-5kqfi.mongodb.net/node-angular?retryWrites=true')
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Database connection failed!')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use('/api/static.txt', (req, res, next) => {
    res.send('this,could,be,a,csv');
    // how to send newline?
})

app.use('/api/posts', postsRoutes);

module.exports = app;
