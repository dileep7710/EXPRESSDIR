const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});

app.post("/", (req, res) => {
    res.send("hello, i am root");
});



// app.use((req, res) => {
//     console.log("request received");
//     res.send("this is a basic response");
// });