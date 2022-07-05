// 1. POST >> accept a string from the request and write the same in a file named "logs.txt"
// 2. GET >> read the "logs.txt" file and pass the read data as response

const express = require('express')
const app = express()
const port = 3000
var fs = require("fs");
var bodyParser = require('body-parser')
app.use(bodyParser.json())

 app.get('/read', (req, res) => {
    var data = fs.readFileSync('logs.txt');
    res.send(data.toString());
  })

app.post('/post', (req, res) => { 
      // let writeData = req.body;
      var jsonContent = JSON.stringify(req.body);
      var writer = fs.appendFileSync('logs.txt', jsonContent + ";\n");
      console.log("Write completed.");
      res.send("data added");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})