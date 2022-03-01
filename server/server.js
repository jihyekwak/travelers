require("dotenv").config({ path: "../.env" });
/* ==== External Modules ==== */
const express = require("express");

const cors = require("cors")
const path = require("path");

/* ==== Internal Modules ==== */

/* ==== Instance Modules ==== */
const app = express();
const routes = require("./routes")

/* ==== Configuration ==== */
const config = require("@travelers/config");

/* ==== Middleware ==== */
app.use(cors())
app.use(express.static(path.join("build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));


/* ==== Routes & Controllers ==== */
app.use("/api", routes)
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