const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const newsRoute = require("./routes/news")
const timerRoute = require("./routes/timer")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to MongoDB");
});

app.use("/images", express.static(path.join(__dirname, "data/images")))

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "data/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});

const upload = multer({storage})
app.post("/api/upload", upload.single("file"), (req,res) => {
    try {
        return res.status(200).json("File uploaded successfully")
    } catch(err) {
        console.log(err)
    }
})

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/news", newsRoute);
app.use("/api/timer", timerRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
});