const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Book {
  _id: ID!
  title:String!
  author:String!
}

input BookInput {
  title:String!
  author:String!
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
