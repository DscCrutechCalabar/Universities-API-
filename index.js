const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const Universities = require("./models/University");
const schema = require("./graphql/schema");
const app = express();
/* swagger section */

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

app.listen(3000, () => {
  console.log("App running at port 3000");
});
