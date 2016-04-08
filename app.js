var express = require('express'),
  app = express(),
  fs = require('fs'),
  path = require('path'),
  multer = require('multer'),
  upload = multer({
    dest: 'uploads/'
  }),
  fileName = '',
  filePath = '',
  fileSize = '',
  port = port = process.env.PORT || 8080;


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/formHandler', upload.single('myFile'),
  function(req, res) {
    if (req.file == undefined) {
      res.write("<script type = 'application/javascript'>alert('No file uploaded')</script>" + "<p><form method= 'POST' enctype='multipart/form-data' action='/formHandler'><input type='file' name='myFile'><input type='submit' name='submit' value= 'Upload'></form> </p>");
      res.end();
      return;
    }else{
    fileName = req.file.filename;
    filePath = path.join(__dirname + '/uploads/' + fileName);
    fs.unlinkSync(filePath);
    fileSize = req.file.size;
    var phrase = "File Size: " + fileSize;
    var alertText = "<script type = 'application/javascript'>alert(" + '"' + phrase + '"' + " );</script>";
    res.write(alertText + "<p><form method= 'POST' enctype='multipart/form-data' action='/formHandler'><input type='file' name='myFile'><input type='submit' name='submit' value= 'Upload'></form> </p>");
    res.end();
    }
  });

app.listen(port);