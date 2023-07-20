import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//CONFIGURACION ENV
dotenv.config();

//CONEXION CON LA BASE DE DATOS
connectDB();

//LLAMAR A EXPRESS
const app = express();

//MIDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//RUTAS
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//REST API
app.get("/", (req, res) => {
  res.send("<h1>Bienvenido a Hella Store C.A</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//EJECUCIÓN
app.listen(PORT, () => {
  console.log(
    `Este servidor esta en modo ${process.env.DEV_MODE} corriendo en el puerto ${PORT}`.bgCyan
      .white
  );
});
