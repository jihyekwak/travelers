const db = require("../models");

const index = (req, res) =>{
    db.Post.findById(req.params.id).select("comments")
    .exec((err, comments) => {
        if (err) return res.status(400).json({
            message: "failure",
            error: err
        })
        return res.status(202).json({
            message: "success",
            data: comments,
        })
        })
}

const create = (req, res) => {
    db.Post.findById(req.params.id, (err, post) => {
        if (err)
            return res.status(400).json({
                message: "Failue",
                error: err
            })
        post.comments.push(req.body)
        post.save((err, createdComment) => {
            if (err) return res.status(400).json({
                message: "failure",
                error: err
            })
            return res.status(202).json({
                message: "success",
                data: createdComment,
            })
        })
    })
}

module.exports = {
    index,
    create
}