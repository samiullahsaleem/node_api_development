const express = require('express');
const bodyParser = require("body-parser");
const mongose = require("mongoose");
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const path = require('path');
const exphbs = require('express-handlebars');

app.use('/static', express.static(path.join(__dirname, 'public')))
//instead of app.set('view engine', 'handlebars'); 

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
// Setting template Engine
app.set('view engine', 'hbs');
// const routes = require("./src/routes/routes.js");
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
  secret: "Our little Secret",
  resave: false,
  saveUninitialized: false,

}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'))

const uri = "mongodb+srv://:@cluster0.bv5ydys.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Database is connected");
  client.close();
});


// routes(app);

app.get('/',(req,res)=>{
    res.render("index");
})

// app.route("/post")
//     .post((req,res)=>{
//       console.log(req.body);
//       res.sendFile("index.html");
//     });
    
app.post("/post",(req,res)=>{
  console.log(req.body);
  res.redirect("index");
})


app.listen(3000,()=>{
    console.log("Server is listening on ");
});

