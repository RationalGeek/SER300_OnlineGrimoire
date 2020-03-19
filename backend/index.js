//dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const mysql = require('mysql');

//SQL CONNECTION
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'perfusionist',
//   password : 'shokugeki',
//   database : 'perfusion_sim'
// });

// connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  //.use('/session', sessionrouter(connection)) //using routers
  
//start server
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});