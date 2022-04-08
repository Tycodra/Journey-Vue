const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoose = require("mongoose");
const dbURL =
  "mongodb+srv://Tycodra:MongoCS260@colonelcluster.surhs.mongodb.net/journey";

// connect to the database
mongoose.connect(dbURL, {
  useNewUrlParser: true,
});

// Create a new item in the museum: takes a title and a path to an image.
app.post("/api/activities", async (req, res) => {
  const activity = new Activity({
    type: req.body.type,
    title: req.body.title,
    description: req.body.description,
    path: req.body.path,
  });
  try {
    await activity.save();
    res.send(activity);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/activityType", async (req, res) => {
  try {
    let activityTypes = await Activity.distinct("type", {});
    res.send(activityTypes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the activities.
app.get("/api/activities/:type", async (req, res) => {
  try {
    let activities = await Activity.find({ type: req.params.type });
    res.send(activities);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/api/activities/:id", async (req, res) => {
  try {
    await Activity.deleteOne({
      _id: req.params.id,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/activities/:id", async (req, res) => {
  try {
    const activity = await Activity.findOne({
      _id: req.params.id,
    });
    activity.title = req.body.title;
    activity.description = req.body.description;
    await activity.save();
    res.send(activity);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3001, () => console.log("Server listening on port 3001!"));

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require("multer");
const upload = multer({
  dest: "../public/images/",
  limits: {
    fileSize: 10000000,
  },
});

// Create a scheme for activities: a title, description and a path to an image.
const activitySchema = new mongoose.Schema({
  type: String,
  title: String,
  description: String,
  path: String,
});
// Create a model for items in the museum.
const Activity = mongoose.model("Activity", activitySchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post("/api/photos", upload.single("photo"), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    // path: "/images/" + req.file.filename,
    path: req.file.filename,
  });
});
