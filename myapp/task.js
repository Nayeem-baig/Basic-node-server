

const express = require('express')
const app = express()
const port = 3000

var fs = require("fs");
var data = '';

var writerStream = fs.createWriteStream('logs.txt');
writerStream.write(data);
writerStream.end();
writerStream.on('finish', function() {
   console.log("Write completed.");
});
writerStream.on('error', function(err) {
   console.log(err.stack);
});


app.post('/create', (req, res) => {
    res.send(data)
    console.log("tets api", req.body.data);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})