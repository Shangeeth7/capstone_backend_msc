const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const mechanicRoute = require("./routes/mechanicsRoute");
const path = require("path");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/mechanic", mechanicRoute);

const port = process.env.PORT || 9988;
console.log(process.env.PORT);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
