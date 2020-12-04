let logic = require("./logic");

function sayHelloRoute(req, res) {
  let name = req.params.name;
  let msg = logic.sayHello(name);
  res.send(msg);
}

module.exports.sayHelloRoute = sayHelloRoute;