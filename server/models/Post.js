const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        body: {
            type: String
        },
    },
    {
        timestamps : true
    }
)

const postSchema = new Schema(
    {
        body: {
            type: String,
            required: true
        },
        comments: [commentSchema],
        user : { type: Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Post", postSchema)