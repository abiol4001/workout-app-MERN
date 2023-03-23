const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

const app = express();

app.use(express.json());

// routes
app.use("/api/workouts", workoutRoutes);

// console.log(process.env.MONGO_URI);

// db connect
mongoose
  .connect('mongodb+srv://abiola:Test1234@nodetuts.zrzd40b.mongodb.net/workout?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4000, () => {
      console.log("Connected to DB & running on port 4000");
    });
  })
  .catch((err) => console.log(err));

