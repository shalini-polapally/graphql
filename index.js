var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Book {
    _id: ID!
    title:String!
    author:String!
    pages:Number!
  }

  input BookInput {
    title:String!
    author:String!
    pages:Number!
  }

  type Query {
    books:[Book!]
  }

  type Mutation {
    createBook(book:BookInput):Book
  }

  schema {
    query:Query
    mutation:Mutation
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello, world!';
  },
};

var app = express();
app.use(
  '/',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/');
