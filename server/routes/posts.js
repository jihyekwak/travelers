const router = require("express").Router()
const {posts} = require("../controllers")
// const upload = require("../middleware/upload")

router.get("/", posts.index)
router.get("/:id", posts.show)
router.post("/", posts.create)
// router.put("/:id", posts.update)
router.delete("/:id", posts.destroy)

module.exports = router;