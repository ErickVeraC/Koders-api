const express = require("express");
const kodersRouter = require("./koders.routes");
const mentorsRouter = require("./mentores.routes");

const app = express();
app.use(express.json());

// Middleware
app.use((request, response, next) => {
  //Todos los middleware reciben 3 parametros, nexst es una funcion que se ejecuta para pasar al siguiente middleware
  console.log(`${request.method} ${request.url}: ${request.body}`);
  next(); //Continua con el siguiente middleware
});

app.use((request, response, next) => {
  if (request.headers.authorization === "pinkibuddin") {
    next();
  } else {
    response.status(401).json({
      message: "No tienes autorización",
      success: false,
    });
  }
});

// Montar el router en el servidor Koders
app.use("/koders", kodersRouter);

// Montar el router en el servidor Mentors
app.use("/mentors", mentorsRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
