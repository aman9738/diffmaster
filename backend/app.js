const express = require("express");
const app = express();
app.route("/").get(function (req, res) {
    res.send("<h1>hello</h1>");
})
app.listen(3000, function () {
    console.log("Listening at port 3000");
});