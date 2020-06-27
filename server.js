const express = require('express')
const app = express()
const port = 3000
let results
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
con.query("SELECT * FROM blogsettings", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    results=result
  });

app.get('/user', (req, res) => res.send(results))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))