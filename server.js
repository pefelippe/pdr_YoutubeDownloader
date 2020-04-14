const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());  // com o cors() o sv aceita requests

app.listen(3001, () =>{
  console.log("Works.")
});  

app.get('/download', (req, res) => {
  var URL = req.query.URL;


  res.header('Content-Disposition', 
  'attachment; filename="video.mp4"');
  
  ytdl(URL, {
    format: 'mp4'
    }).pipe(res);
});
