const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const clientRoute = express.Router()
const batchRoutes = express.Router()
const connection = require('./database').connection

let port = process.env.PORT
if (port == null || port === '') {
  port = 5000
}

app.use(cors())
app.use(bodyParser.json())

batchRoutes.route('/').get(function (req, res) {
  let sql = `SELECT * FROM batch`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.json(results);
  });
})

clientRoute.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../my-buch/dist/index.html'));
});
app.use(express.static('my-buch/dist'))

app.use('/batches', batchRoutes)
app.use('/', clientRoute)

app.listen(port, function () {
  console.log('Server is running on Port: ' + port)
})
