const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
  "mongodb+srv://hardikgaur900:<password>@cluster0.7gqzafd.mongodb.net/?retryWrites=true&w=majority"
);
