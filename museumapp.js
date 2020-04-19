
// Express toevoegen aan Node.js
const express = require('express');
const app = express();

// bibliotheek inladen om paden naar folder te maken
const path = require('path');

// applicatiepoort instellen
const port = 5000;

app.use(express.static('public'));

// EJS configureren
app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

// databestand inladen
const posts = require('./data/portf.json');

// route naar "homepagina" laten werken
app.get('/', function(req,res){
  res.render('home', {
    // Array van blogberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: posts.portf,

  });
});

app.get('/portf/:postid', function(req,res){
  res.render('detail', {
    post: posts.portf[req.params.postid]

  });
});

app.get("/portfolio", function(request, response){
  response.render("portfolio",{
    posts: posts.portf

  });
});


app.get("/contact", function(request, response){
  response.render("contact");
});

app.use( express.static( "public" ) );


app.set('port', (process.env.PORT || 5000));
// app luisteren naar applicatiepoort
app.listen(app.get('port'));
