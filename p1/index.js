const express = require('express')
const app = express()
const PORT = '3000'
const HOST = 'localhost'

app.use(express.urlencoded({
    extended: true
  }))
  
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "GATEForm.html");
})

app.post('/submit', function (req, res) {
    return res.json(req.body)
})

app.listen(PORT, HOST, () => console.log(`Server listening on http://${HOST}:${PORT}`))