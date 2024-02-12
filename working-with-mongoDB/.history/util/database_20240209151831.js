const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://hardikgaur900:apsikAopSOOWhvF9@cluster0.7gqzafd.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log("Connected");
      cb(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
