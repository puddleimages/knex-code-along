const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')['development']);

app.get('/', (req, res) => {
  res.send('Application up and Running.')
})

app.listen(port, () => {
  console.log('It is running yo.')
})

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(data => {
      res.json(data)
    })
})