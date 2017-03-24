'use strict'

const express = require('express');
const app = express();


const requestTime = (req, res, next)=>{
  let time = new Date();
  req.requestedTime = time.toISOString();
  console.log(time);
  next();
}

app.use(requestTime);

app.get('/', (req, res, next)=>{
  res.send(`<h1>Hello world!</h1>`);
  // res.send(req.requestedTime);
});


 let port =3000;
app.listen(port, () => {
  console.log('listening on port 3000')
})
