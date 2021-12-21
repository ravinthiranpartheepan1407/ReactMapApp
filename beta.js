const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.listen(port, ()=>{
  console.log("Server Connected At Port 4000");
})

app.get('/api', function(req, res){
  res.send("Backend Connected To React Front End Code");
})
