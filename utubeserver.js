const express = require('express');
const stompit = require('stompit')
const date = require('date-and-time')
const app = express();
const {Pool,Client} = require('pg');
const pool = new Pool({
  connectionString: 'postgresql://postgres:password@192.168.209.101:5432/myedgedb',
})
const port = process.env.PORT || 8787;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes will go here

app.get('/', function(req, res){
  const now  =  new Date();

const timestampvalue = date.format(now,'YYYY-MM-DD HH:mm:ss');
// Display the result
console.log("current date and time : " + timestampvalue)

var mycurdate = new Date();
var mycurdateonly = date.format(mycurdate,'YYYY-MM-DD');
console.log("current date only : " + mycurdateonly)
var mycurdateonlystr = mycurdateonly + ' 00:00:00.000';
console.log("current date only str : " + mycurdateonlystr)

mycurdate.setDate(mycurdate.getDate() + 1);
var mynextdateonly = date.format(mycurdate,'YYYY-MM-DD');
console.log("next date only : " + mynextdateonly);
var mynextdateonlystr = mynextdateonly + ' 00:00:00.000';
console.log("next date only str : " + mynextdateonlystr);


    res.send('Hello world Scalable Assignment UTUBE Microservice App : TimeStamp :'+ timestampvalue);
  });// sample get

  app.post('/api/post1', function async(req, res) {
    console.log('post sample post edge server');
    console.log(req.body)
    res.send({
      'result':"sample post edge server",
      'username': req.body.username
    });
  });// sample post


  app.get('/api/youtubeget', function(req, res){
   
      const queryText = 'select * from youtubetable;'
      pool.query(queryText,  async (err, result) => {
          if (err) {
            console.log(err.stack);
            //res.send({myresult:'Registration failed or Email Already exist'});
          // res.send({myresult:'Server error',username:'dummy',email:'dummy',gender:"dummy",accessToken:"dummy",items:[]});
            //return;
            res.send({items:[]});
            }
            else {
                //console.log(result.rows);
                res.send({items:result.rows});
            }

        }); //pool query
        
    }
  );// sample youtube get

  app.post('/api/utube/datasend', function async(req, res) {
    console.log(req.body)
    var username = req.body.username;
    var myapp = req.body.myapp;
    var duration = req.body.duration;

    // Importing module
//const date = require('date-and-time')
  
// Creating object of current date and time 
// by using Date() 
const now  =  new Date();
  
// Formatting the date and time
// by using date.format() method
const timestampvalue = date.format(now,'YYYY-MM-DD HH:mm:ss');
  
// Display the result
console.log("current date and time : " + timestampvalue)

     stompit.connect({ host: '192.168.209.101', port: 61613 }, async (err, sclient) => {
      frame = sclient.send({ destination: 'LocalToInternet' })
     
      await frame.write(username+','+myapp+','+timestampvalue+','+duration);
     
      await frame.end()
     
      sclient.disconnect()
    })
  
    res.send({
      'result':"send to amq ok"
    });
  });


  

app.listen(port);
console.log('Server started at http://localhost:' + port);