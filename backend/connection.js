const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection failed:", err));
