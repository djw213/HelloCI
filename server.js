let express = require("express");
let routes = require("./routes");

let app = express();

app.get("/sayhello/:name", routes.sayHelloRoute);

module.exports.app = app;