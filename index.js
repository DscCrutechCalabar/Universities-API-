const hapi = require("hapi");
const mongoose = require("mongoose");
const Universities = require("./models/Universities");
const { graphqlHapi, graphiqlHapi } = require("apollo-server-hapi");
const schema = require("./graphql/schema");

/* swagger section */
const Inert = require("inert");
const Vision = require("vision");
const HapiSwagger = require("hapi-swagger");
const Pack = require("./package");

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

const server = hapi.server({
  port: 4000,
  host: "localhost"
});

const init = async () => {
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: "Universities API Documentation",
          version: Pack.version
        }
      }
    }
  ]);

  await server.register({
    plugin: graphiqlHapi,
    options: {
      path: "/graphiql",
      graphiqlOptions: {
        endpointURL: "/graphql"
      },
      route: {
        cors: true
      }
    }
  });

  await server.register({
    plugin: graphqlHapi,
    options: {
      path: "/graphql",
      graphqlOptions: {
        schema
      },
      route: {
        cors: true
      }
    }
  });

  server.route([
    {
      method: "GET",
      path: "/api/v1/universities",
      config: {
        description: "Get all the universities.",
        tags: ["api", "v1", "university"]
      },
      handler: (req, reply) => {
        return Universities.find();
      }
    },
    {
      method: "POST",
      path: "/api/v1/universities",
      config: {
        description: "Get a specific university by ID.",
        tags: ["api", "v1", "university"]
      },
      handler: (req, reply) => {
        const { name, type, location } = req.payload;
        const university = new Universities({
          name,
          type,
          location
        });

        return university.save();
      }
    }
  ]);

  await server.start();
  console.log(`Server running at: ${server.info.uri} `);
};

init();
