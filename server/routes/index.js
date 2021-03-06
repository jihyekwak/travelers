const router = require("express").Router()

//normally we would put this in server.js but we're doing it on layer deeper so we can prepend our api calls with "/api/<route here>" 

router.use("/users", require("./users"))
router.use("/auth", require("./auth"))
router.use("/posts", require("./posts"))
router.use("/", require("./comments"))

module.exports = router; 