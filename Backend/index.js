import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/book.js";

dotenv.config();
const app = express();
//MIDDLEWARE for parsing JSON
app.use(express.json());

//ROUTES//
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
