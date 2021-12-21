const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');
const cors = require('cors');
const buildPath = path.join(__dirname + '/src');
app.use(express.json());
app.use(express.static(buildPath));
app.use(cors());
app.options('*', cors());
app.listen(port, ()=>{
  console.log("Server Connected At Port 4000");
})

app.get('/api', function(req, res){
  res.send("Backend Connected To React Front End Code");
})

app.get("/", (req, res)=>{
  res.sendFile(__dirname + '/src/postcode.json');
})

app.post('/send', (req, res)=>{
  if(req.body.name == 12345 && 01234){
    res.send("successful");
    console.log("successful");
  }
  else if(req.body.name == 12346 && 12244 && 12013){
    res.send("false");

    console.log("false");
  }
  else if(req.body.name == 0 && 123_45){
    res.send("400 Bad Request");
    console.log("400 Bad Request");
  }
  else{
    res.send("Invalid ZipCode");
    console.log("Invalid ZipCode");
  }
})
