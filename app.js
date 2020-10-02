const express = require('express');
const exphbs  = require('express-handlebars');
const config = require("./libs/config");
const bodyParser = require("body-parser");
const Routers = require("./routers");
const app = express();
// Parse Json 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(Routers)

app.use(express.static('assets'));
 
app.use('/assets', express.static(__dirname + '/assets'));
 
app.listen(config.PORT, () => {
    console.log(`Su servidor esta corriendo en http://localhost:${config.PORT}`)
});