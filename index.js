const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

//const port = process.argv[2] || 9000;

const mimeType = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.eot': 'appliaction/vnd.ms-fontobject',
    '.ttf': 'aplication/font-sfnt'
  };

  http.createServer(function (req, res) {
    console.log(`${req.method} ${req.url}`);

    const parsedUrl = url.parse(req.url);

    const sanitizePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
    let pathname = path.join(__dirname, sanitizePath);
  
    fs.exists(pathname, function (exist) {
      if(!exist) {
        // if the file is not found, return 404
        res.statusCode = 404;
        res.end(`File ${pathname} not found!`);
        return;
      }
  
      // if is a directory, then look for index.html
      if (fs.statSync(pathname).isDirectory()) {
        pathname += '/index.html';
      }
  
      // read file from file system
      fs.readFile(pathname, function(err, data){
        if(err){
          res.statusCode = 500;
          res.end(`Error getting the file: ${err}.`);
        } else {
          // based on the URL path, extract the file extention. e.g. .js, .doc, ...
          const ext = path.parse(pathname).ext;
          // if the file is found, set Content-type and send data
          res.setHeader('Content-type', mimeType[ext] || 'text/plain' );
          res.end(data);
        }
      });
    });

    const mysql = require('mysql');
    //const express = require("express");
    const connection = mysql.createConnection({
        host        : 'localhost',
        user        : 'root',
        password    : 'root',
        database    : 'school_db'
    
    });
    //const app = express();
    
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT distinct(name_of_school) as schools,  p1__enrolment__boys as p1_boys, p1__enrolment__girls as p1_girls, p2__enrolment__boys as p2_boys, p2__enrolment__girls as p2_girls, p3__enrolment__boys as p3_boys, p3__enrolment__girls as p3_girls, p4__enrolment__boys as p4_boys, p4__enrolment__girls as p4_girls, p5__enrolment__boys as p5_boys, p5__enrolment__girls as p5_girls, p6__enrolment__boys as p6_boys, p6__enrolment__girls as p6_girls, p7__enrolment__boys as p7_boys, p7__enrolment__girls as p7_girls FROM tbl_random limit 10;", function(err, result, fields){
          if (err) throw err;
          let stringified = JSON.stringify(result);
          let parsedObj = JSON.parse(stringified);
          let newArray = parsedObj;
          let len = newArray.length;
          let p1_boys = 0;
          let p1_girls = 0;
          let schools = 0;
    
          for(let i = 0; i < len; i++){
            if(newArray[i].p1__enrolment__boys===p1_boys){
              p1_boys = p1_boys +1;
            }
            else if(newArray[i].p1__enrolment__girls===p1_girls){
              p1_girls = p1_girls +1;
            }
            else if(newArray[i].name_of_school===schools){
              schools = schools +1;
            }
            else {return null}
    
          }
          console.log(p1_boys, p1_girls, schools);
    
    
       
            })
          
    
                   
        });
  
  }).listen(parseInt(port));
  
  console.log(`Server listening on port ${port}`);
  

