const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const postSchema = new Schema({
//     title: {type: String},
//     content: {type: String}
// })
const userSchema = new Schema(
    {   
        firstName: { 
            type: String
        },
        lastName: { 
            type: String
        },
        username: { 
            type: String, 
            unique: true,
            required: true, 
        },
        password: { 
            type: String,
            required: true,
            select: false  
        },
        posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
        comments: [{ type: Schema.Types.ObjectId, subRef: "Post.comment"}],
        avatar: String
    }, 
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
