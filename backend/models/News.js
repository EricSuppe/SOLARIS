const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
    {
        displayPicture: {
            type: String,
            default: ""
        },
        tag: {
            type: Array,
            required: true,
        },
        author: {
            type: String,
            default: "Solaris News-Team"
        },
        headline: {
            type: String,
            required: true,
            min: 3,
        },
        previewText: {
            type: String,
        },
        content: {
            type: Array,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("News", NewsSchema);