const db = require("../models");
const mongoose = require("mongoose")

const index = (req, res) => {
    db.Post.find().exec((err, allPosts) => {
        if (err)
            return res.status(400).json({
                message: "Failure",
                error: err 
            });
        return res.status(201).json({
            message: "Success",
            data: allPosts
        })
    })
}

const show = (req, res) => {
    db.Post.findById(req.params.id)
        .populate("user")
        .exec((err, foundPost) => {
            if (err)
            return res.status(400).json({
                message: "Failure",
                error: err 
            });
        return res.status(201).json({
            message: "Success",
            data: foundPost
        })
        })
}

const create = (req, res) => {
    db.Post.create(req.body, (err, createdPost) => {
        if (err)
        return res.status(400).json({
            message: "Failure",
            error: err 
        });
        console.log(createdPost, "createdPost")
        db.User.findById(createdPost.user)
            .exec((err, foundUser) => {
                if (err) return res.status(400).json({
                    message: "Failure",
                    error: err
                })
                foundUser.posts.push(createdPost)
                foundUser.save()    
            })
    return res.status(201).json({
        message: "Success",
        data: createdPost
    })
})
}

const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        console.log(deletedPost);
        if (err) return res.status(400).json({
            message: "failure",
            error :err
        })
        db.User.findById(deletedPost.user, (err, foundUser) => {
            foundUser.posts.remove(deletedPost)
            foundUser.save()
        })
        return res.status(200).json({
            message: "Success!",
            data: deletedPost
        })
    })
}

module.exports = {
    index,
    show,
    create,
    destroy

}