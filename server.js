const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const clientRoute = express.Router()
const playlistRoutes = express.Router()
//require('./database')

let port = process.env.PORT
if (port == null || port === '') {
  port = 5000
}

app.use(cors())
app.use(bodyParser.json())

/*playlistRoutes.route('/').get(function (req, res) {
  Playlist.find(function (err, playlists) {
    if (err) {
      console.log(err)
    } else {
      res.json(playlists)
    }
  })
})*/

clientRoute.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../my-buch/dist/index.html'));
});
app.use(express.static('my-buch/dist'))

app.use('/playlists', playlistRoutes)
app.use('/', clientRoute)

app.listen(port, function () {
  console.log('Server is running on Port: ' + port)
})
