import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";

const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["localhost:3000", "http://localhost:3000"],
    credentials: true,
  })
);

//routes

// app.use("/api/auth", authRoutes);
// app.use("/api/order", orderRoutes);
// app.use("/api/product", productRoutes);
// app.use("/api/config", configRoutes);

app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const status = error.statusCode || 500;
  const message = error.message || "Unknown error";

  const data = error.data || "";
  res.status(status).json({
    status: status,
    error: error,
    message: message,
    stack: error.stack,
  });
});

module.exports = app;
