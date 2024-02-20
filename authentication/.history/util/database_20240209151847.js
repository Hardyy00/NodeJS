const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://hardikgaur900:apsikAopSOOWhvF9@cluster0.7gqzafd.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      cb(client);
    })
    .catch((err) => {
      console.log(err);
    });
};
