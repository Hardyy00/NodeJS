const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
  "mongodb+srv://hardikgaur900:apsikAopSOOWhvF9@cluster0.7gqzafd.mongodb.net/?retryWrites=true&w=majority"
)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
