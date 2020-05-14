const express = require("express");
const mongooose = require("mongooose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// MiddleWare
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Serving for Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes for both API & View
app.use(routes);

// Connect to Mongo
mongooose.connect(process.env.MONGODB_URI || "mongodb://localhost/aa");

// Start the API server

app.listen(PORT, function() {
  console.log("http://localhost:" + PORT);
});
