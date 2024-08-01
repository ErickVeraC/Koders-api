const express = require("express");

const router = express.Router();

router.use((request, response, next) => {
  console.log("Middleware de router koders");
  next();
});

//GET /koders
router.get(
  "/",
  (request, response, next) => {
    // Aqui estoy demostrando que se pueden tener varios middleware en una sola ruta
    console.log("Middleware de GET koders");
    next();
  },
  (request, response) => {
    response.json({
      message: "GET koders",
    });
  }
);

//POST /koders
router.post("/", (request, response) => {
  response.json({
    message: "POST koders",
  });
});

//DELETE /koders
router.delete("/;name", (request, response) => {
  response.json({
    message: "DELETE koders",
  });
});

//DELETE ALL /koders
router.delete("/", (request, response) => {
  response.json({
    message: "DELETE ALL koders",
  });
});

/* Ejemplo de una URL dinámica 
router.get("/:name/attendace/:day", (request, response) => {
    resoibse.json({ message: "GET koders attende"})
})
Es importante mencionar que los casos dinamicos van al ultimo y las constantes arriba    
*/

module.exports = router;
