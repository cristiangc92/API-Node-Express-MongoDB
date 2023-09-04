const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user.routes");

const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use("/api", userRoutes);

//rutas
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});

//mongodb conexion
mongoose
  .connect(process.env.URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log("Server listening on port: ", port);
});
