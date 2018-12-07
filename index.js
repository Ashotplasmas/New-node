// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("<h1>Hello world</h1>");
// });
// app.get("/google", function(req, res){
//    var name = req.params.name;
//    res.redirect('http://google.com');
   
// });
// app.get("/google/:search", function(req, res){
//     var s = req.params.search;
//     res.redirect('http://google.com/search?q=' + s);
    
//  });
//  app.get("/*", function(req, res){
    
//     res.send('404 Not found');
    
//  });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });




var Square = require("./modul");
var mySquareObject = new Square(5);

function main() {
   console.log(mySquareObject.getArea());
}
main();

