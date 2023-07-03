const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("helloe");
});
app.get("/time/:continet/:timezone", (req, res) => {
  try {
    const timezone = req.params.timezone;
    console.log(req.params.timezone);
    const date = new Date().toLocaleString("en-US", {
      timeZone: `${req.params.continet}/${timezone}`,
    });
    const time = date.split(",")[1].trim();
    console.log(req.body);
    res.send({ timezone, time });
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
