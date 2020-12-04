let chai = require("chai");
let logic = require("../logic");

suite("Test the say hello logic", function() {

  test("Test sayHello function", function() {
    let msg = logic.sayHello("David");
    chai.assert.equal(msg, "Hello David", "Wrong msg");

    msg = logic.sayHello("Jane");
    chai.assert.equal(msg, "Hello Jane", "Wrong msg");
  }); 

});