const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

/* Routers */

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'))
});
/* Home */
// app.get('/', function(req,res){
//     res.sendFile(__dirname + '/views/index.html');
// });


app.use('/',router);
app.listen(process.env.port || 8081, ()=>{
    console.log("Server on 8081");
});