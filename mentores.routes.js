const express = require("express");

const router = express.Router();

//GET /mentors
router.get("/", (request, response) => {
  response.json({
    message: "GET mentors",
  });
});

//POST /mentors
router.post("/", (request, response) => {
  response.json({
    message: "POST mentors",
  });
});

//DELETE /mentors
router.delete("/:name", (request, response) => {
  response.json({
    message: "DELETE mentors",
  });
});

//DELETE ALL /mentors
router.delete("/", (request, response) => {
  response.json({
    message: "DELETE ALL mentors",
  });
});

module.exports = router;
