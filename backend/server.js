const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const path = require('path');
const db = require('./config/operationdb')
const sqlmodels = require('./models')
//bring routes
const apiRoutes = require("./routes");

//app
const app = express();
app.use(cors());

//database connect
db.myql_connect()

//middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());

//allow cors on development
// if (process.env.NODE_ENV == "development") {

//   app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

// }
  if (process.env.NODE_ENV === 'production') {
  // Serve a static assets if in productions
  // Set a static folder
  app.use(express.static(path.join(__dirname, "../frontend/build")))
  // Send all requests in build index
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
  });

  console.log("Sent file to build index.html")
}

//routes middleware
app.use("/api", apiRoutes);

//port
const port = process.env.PORT || 5000;

sqlmodels.sequelize.sync().then(req => {
  app.listen(port, () => {
    console.log(`Your server is running on port ${port}`);
  });
})
