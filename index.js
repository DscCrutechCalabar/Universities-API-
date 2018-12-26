const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./graphql/schema");
const cors = require("cors");
const path = require("path");
const University = require("./models/University");

const app = express();

//allow cross origin requests
app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/build/index.html")));
  });
}
//build mode
app.get("*", (req, res) => {
  res.sendFile(
    path.join("/home/tg/Desktop/Universities-API-/client/public/index.html")
  );
});

//connect to db
var databaseUrl =
  "mongodb://DSC-Calabar:calabar001@ds121814.mlab.com:21814/universities-api";
mongoose.connect(
  databaseUrl,
  { useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("Database Connection Successful");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("App running at port 4000");
});
