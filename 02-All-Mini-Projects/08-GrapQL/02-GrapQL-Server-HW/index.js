const typeDef = `
schema {
  query: Query
}
type Query {
  hello: String
}
`;

const resolvers = {
  Query: {
    
  }
}