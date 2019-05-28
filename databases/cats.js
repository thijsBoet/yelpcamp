var mongoose = require("mongoose");             
mongoose.connect("mongodb://localhost/cat_app");    //connect with database

var catSchema = new mongoose.Schema({               //create DB schema
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);         //add a javascript layer on Mongo so we can call methods on it

// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("something went wrong");
//     } else {
//         console.log("We saved "+cat+" to the database");
//     }
// });

//".create" faster method both creates new object and saves it.
//------------------------------------------------------------------------------
Cat.create({
  name: "snowwhite",
  age: 15,
  temperament: "nice"
}, function(err, cat){
    if(err){
        console.log("error" +err);
    } else {
        console.log(cat);
    }    
});


Cat.find({}, function(err, cats){
    if(err){
        console.log("error" +err);
    } else {
        console.log(cats);   
    }
});