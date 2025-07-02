// * Server Entry File
require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();

const connection = require("./connection");
const authRoutes = require("./routes/auth.routes");
const recipeRoutes = require("./routes/recipe.routes");
const userRoutes = require("./routes/user.routes");
const commentRoutes = require("./routes/comment.routes");
const notiRoutes = require("./routes/notifications.routes");
const upload = require("./middlewares/upload.middleware");
const chatRouter = require("./routes/chat.routes");

// * Middlewares
app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

// * File Upload Route
app.post("/upload", upload.array("file", 5), (req, res) => {
  console.log(req.files);
  res.status(200).json({ message: "File upload successful" });
});

// * Routes
app.use("/auth", authRoutes);
app.use("/recipe", recipeRoutes);
app.use("/users", userRoutes);
app.use("/comment", commentRoutes);
app.use("/notification", notiRoutes);
app.use("/chat", chatRouter);

// * Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Successfully connected To Database");
    console.log("Server running at port :", PORT);
  } catch (err) {
    console.log(err);
  }
});
