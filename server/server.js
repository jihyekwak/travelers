require("dotenv").config()
/* ==== External Modules ==== */
const express = require("express");
const path = require("path");

/* ==== Internal Modules ==== */

/* ==== Instance Modules ==== */
const app = express();

/* ==== Configuration ==== */
const config = require("@travelers/config");

/* ==== Middleware ==== */
app.use(express.static(path.json("build")))

/* ==== Routes & Controllers ==== */
app.all("/api/*", (req, res, next) => {
    res.send("HOLD UP THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
})

// Magical full stack middleware
// this targets anything that is not an api route, therefore it will be handled by React Router. The api routes myst hit first, order matters, then use react via the React build directory

// any request not covered by routes express makes -- will get piped to this middleware
// this literally hands over control to react
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

/* ==== Server Listener ==== */
app.listen(config.PORT, ()=> {
    console.log(`myspace is live at http://${config.PORT}`)
})