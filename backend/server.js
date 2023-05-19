require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//ROUTES
const authRoute = require("./routes/authRoute");
const usersRoute = require("./routes/usersRoute");

const app = express();

const PORT = process.env.PORT || 3001;
const DB = process.env.DB;

// MIDDLEWARE
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

mongoose
  .connect(DB)
  .then((res) =>
    app.listen(PORT, () => console.log(`Listening to port ${PORT}...`))
  )
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("index");
});

app.use("/auth", authRoute);
app.use("/users", usersRoute);
