var express = require("express")
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var app = express();
app.use(express.static('Public'))


var PORT =  process.env.PORT || 8090;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


require("./Routes/apiRoutes") (app);
require("./Routes/htmlRoutes") (app);



app.listen(PORT, function() {
  console.log("App listening on PORT on http://localhost:" + PORT);
});


 
