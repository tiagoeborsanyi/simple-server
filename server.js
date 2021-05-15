const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

const notes = ['primeira nota']

app.post('/', (req, res) => {
  const { data } = req.body
  console.log('body: ', req.body.data)
  notes.push(data)
  res.json({notas: notes})
})

app.get('/', (req, res) => {
  res.json({notas: notes})
})

app.listen(5000, () => console.log('running server port 5000'))