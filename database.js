const mysql = require('mysql');
const express = require("express");
const pool = mysql.createPool({
    host        : 'localhost',
    user        : 'root',
    password    : 'root',
    database    : 'school_db'

});
const app = express();

app.get('/',function(req,res,next){
  let = context = {};
    //if (err) throw err;
    mysql.pool.query("SELECT distinct(name_of_school) as schools,  p1__enrolment__boys as p1_boys, p1__enrolment__girls as p1_girls, p2__enrolment__boys as p2_boys, p2__enrolment__girls as p2_girls, p3__enrolment__boys as p3_boys, p3__enrolment__girls as p3_girls, p4__enrolment__boys as p4_boys, p4__enrolment__girls as p4_girls, p5__enrolment__boys as p5_boys, p5__enrolment__girls as p5_girls, p6__enrolment__boys as p6_boys, p6__enrolment__girls as p6_girls, p7__enrolment__boys as p7_boys, p7__enrolment__girls as p7_girls FROM tbl_random limit 10;", function(err, result, fields){
      if (err){
        next(err)
        return;
      } 
     context.result = JSON.stringify(result);
     res.render('home', context);

    
  

  
console.log(result);



app.listen(3000);


























      // let boysPlot = [];
      // let girls = [];
      // let flag = 0;
      // for(let i = 0; i < result.length; i++){
      //   let schools = result[i].p1_girls;
      //   let boyz = result[i].p1_boys;
      //   for(let j = 0; j <= result.length; j++){
      //       if(newArray[j] === schools || newArray[i] ===boyz){
      //         flag = 1;
      //         break;
             
          
      //     }
      //   }
      //   if(flag === 0){
      //     newArray.push(schools);
      //   }
      //   else{
      //     flag = 0;
      //   }

      // }
     //console.log(newArray);
      // for(let i = 0; i < result.length; i++){
      //   let boys = result[i].boys;
      //   for(let j = 0; j <= result.length; j++){
      //     if(boys[j] === p1_boys){
      //       flag = 1;
      //       break;
      //     }
      //   }
      //   if(flag === 0){
      //     boys.push(boys);
      //   }
      //   else{
      //     flag = 0;
      //   }

      // }


      // console.log(boys);
      // let stringified = JSON.stringify(result);
      // let parsedObj = JSON.parse(stringified);
      // let newArray = parsedObj;
      // let len = newArray.length;
      // let p1_boys = 0;
      // let p1_girls = 0;
      // let schools = 0;

      // for(let i = 0; i < len; i++){
      //   if(newArray[i].p1__enrolment__boys===p1_boys){
      //     p1_boys = p1_boys +1;
      //   }
      //   else if(newArray[i].p1__enrolment__girls===p1_girls){
      //     p1_girls = p1_girls +1;
      //   }
      //   else if(newArray[i].name_of_school===schools){
      //     schools = schools +1;
      //   }
      //   else {return null}

      // }
      // console.log(p1_boys, p1_girls, schools);

// let data = JSON.parse(result);
// let data1 = data.map(function(item){
//   return parseInt(item, 10);
// });
// console.log(data);




   
        })

        

               
    });

    // function fillGraph(result){
    //   let newArray = [];
    //   for(let i = 0; i < result.length; i++){
    
    //   }
    //   console.log(result);

   

