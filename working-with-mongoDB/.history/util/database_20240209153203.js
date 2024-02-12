const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) => {
  MongoClient.connect("mongodb://127.0.0.1:27017/test")
    .then((client) => {
      console.log("Connected");
      cb(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
