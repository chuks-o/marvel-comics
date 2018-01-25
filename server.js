var express =  require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(__dirname + "/dist"))

var port = process.env.PORT || 80;

app.listen(port)
  console.log(`Server running at port ${port}`)
