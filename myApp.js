let express = require('express');
const res = require('express/lib/response');
let app = express();
//#1
console.log("Hello World")
//#2
//app.get("/", (req, res) => {
//    res.send("Hello Express")
//})

//#4
app.use("/public", express.static(__dirname + "/public"))

//#3
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

//#5
//app.get("/json", (req, res) => {
//    res.json({
//        "message": "Hello json"
//    })
//})

//#6
app.get("/json", (req, res) => {
   if ( process.env["MESSAGE_STYLE"] == "uppercase"){
    res.json({"message": "HELLO JSON"})
   } else {
    res.json({"message": "hello json"})
   }
  })

































 module.exports = app;
