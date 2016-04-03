var express = require('express'),
    app = express(),
    path = require('path'),
    multer = require('multer'),
    upload = multer({dest: 'uploads/'}),
    path = require("path"),
    port = port = process.env.PORT || 8080;
    

    app.get('/',function(req,res){ 
        res.sendFile(path.join(__dirname+'/index.html'));
        }); 
        app.post('/formHandler', upload.single('myFile'), 
        function(req, res) { 
            console.log(req.file); res.json( req.file.size ); }); 
            app.listen(port);
