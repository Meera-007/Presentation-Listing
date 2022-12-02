const express = require("express");

const port = 5000;
const app = express();
// importing the userRouter
const userRouter = require("./routers/userRouter");
const slideRouter = require("./routers/slideRouter");
const utilRouter = require("./routers/util");

const cors = require("cors");

// middleware to convert client json data to
app.use(express.json());

// for allowing frontend request
app.use(cors({ origin: ["http://localhost:3000"] }));

app.use("/user", userRouter);

app.use("/slide", slideRouter);
app.use("/util", utilRouter);


app.use(express.static('./static/uploads'));

// starting the server
app.listen(port, () => {
  console.log("server started");
});