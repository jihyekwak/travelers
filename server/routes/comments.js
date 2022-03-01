const router = require("express").Router();
const {comments} = require("../controllers");

router.get("/posts/:id/comments", comments.index);
router.post("/posts/:id/comments", comments.create);

module.exports = router;