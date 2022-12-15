const { default: mongoose } = require("mongoose");

const DATABASE_URL = process.env.DB_URL;

const connectToDB = () => {
    mongoose
      .connect(DATABASE_URL)
      .catch((e) => {
        console.log("Error connecting to database");
        console.log(e);
      });
}

module.exports = connectToDB;