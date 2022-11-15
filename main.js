const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8000;
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.listen(PORT, function () {
  console.log("application started on port: ", PORT);
});

// create an app that has the following routes

// GET /add, this route shoud take in 2 numbers as query parameters and returns the sum
// /add?num=6&num2=17  -> 23

app.get("/add/:num1/:num2", function (req, res) {
  input1 = Number(req.params.num1);
  input2 = Number(req.params.num2);
  let sum = input1 + input2;
  res.send(sum.toString());
});

// POST /multiply, this route should take in 2 numbers and return the product
// multiply -> 24
// {
//     "num1": 2,
//     "num2": 12
// }



app.post("/multiply", function (req, res) {
  let payload = req.body;
  // res.json(req.body);
  let num1 = payload.num1;
  let num2 = payload.num2;
  let product = num1 * num2;
  res.send(product.toString());
});

// PUT /reciprocal this route should take in a single number as a path parameter and return the reciprocal
//  /reciprocal/4 -> .25

app.put("/reciprocal/:num", function (req, res) {
  let num = Number(req.params.num);
  let reciprocal = 1 / num;
  res.send(reciprocal.toString());
});
