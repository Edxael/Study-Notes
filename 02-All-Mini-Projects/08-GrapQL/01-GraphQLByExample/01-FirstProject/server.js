const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 9000;

const typeDefs = ``;



app.use( cors(), bodyParser.json() );


app.listen(port, () => {
  console.log(`Server running n port: ${port}...`); 
})