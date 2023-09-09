import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/book.js";
import cors from "cors";

dotenv.config();
const app = express();

//MIDDLEWARE for parsing JSON
app.use(express.json());

//MIDDLEWARE for CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

//ROUTES//
app.get("/", (req, res) => {
  res.send("Api Running Successfully :)");
});

app.use("/book", bookRoutes);

const PORT = process.env.PORT || 8001;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(`Error: ${error}`));
