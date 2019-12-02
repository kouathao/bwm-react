const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");

// import routes
const rentalRoutes = require("./routes/rentals");

// import modal
const FakeDb = require("./fake-db");
const Rental = require("./models/rental");

// connect to db
mongoose
  .connect(config.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("DB CONNECTED");
    const fakeDb = new FakeDb();
    fakeDb.seedDB();
  })
  .catch(error => {
    console.log(error);
  });

const app = express();

// middle ware
app.use("/api/v1/rentals", rentalRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, function() {
  console.log(`Running on port ${PORT}`);
});
