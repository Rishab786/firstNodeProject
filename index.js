const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const displayDataRouter = require("./routes/displayData");
const app = express();
const PORT = 8085;

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRouter);
app.post("/displayData", displayDataRouter);
app.use("/", shopRouter);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "views", "error.html"));
});

app.listen(PORT, () => {
  console.log("server started");
});
