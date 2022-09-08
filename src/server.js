const path = require('path');
/* const express = require('express') */
import express from 'express';
import viewEngine from './configs/viewEngine';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.render('index.ejs')
})

viewEngine(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})