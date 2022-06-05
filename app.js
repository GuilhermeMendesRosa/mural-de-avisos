const express = require('express');
const { link } = require('fs');
const path = require("path")
const app = express();
const port = 3000
const mongoose = require("mongoose")
const postRoute = require("./routes/postRoutes")

mongoose.connect("mongodb://localHost/muralPosts", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use("/", postRoute)

app.listen(port, () => { console.log(`Example listening on port ${port}`)})