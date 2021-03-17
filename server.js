const express = require("express");

const app = express()
const PORT = 3000

app.set("view engine", "ejs")

app.get("/", (req, res, next) =>{
    res.render("index")
})

app.listen(PORT, () => {
    console.log(`Server Started at http://localhost:${PORT}`);
})
