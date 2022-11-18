var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

var app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

const uri = `mongodb+srv://Shalinni_25:RegrettingU1@cluster0.rr9carm.mongodb.net/authDB?retryWrites=true&w=majority`;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(
      4000,
      console.log('Running a GraphQL API server at http://localhost:4000/')
    )
  )
  .catch((error) => {
    throw error;
  });
