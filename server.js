require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const Server = express();

Server.use(express.static(__dirname + '/public'));
Server.use(cors());
Server.set('trust proxy', true);

Server.get('/',(req,res) =>{
  res.sendFile(__dirname + '/public/views/index.html');
})

Server.get('/api/whoami',(req,res) =>{
  const { ip } = req;
  const language = req.headers["accept-language"];
  const userInfo = req.headers["user-agent"];
  res.send({
    ipaddress: ip,
    language: language,
    software: userInfo
  });
})

Server.listen(process.env.PORT || 3000, function () {
  console.log("Express listening on port: " + this.address().port);
});

