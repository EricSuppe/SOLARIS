const mongoose = require("mongoose");

const TimeerScheema = new mongoose.Schema(
    {
        time: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Timer", TimeerScheema);