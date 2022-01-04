const express = require('express');
require("dotenv").config();

const app = express();

app.use(express.static("public"));


// app.get("/", (req, res) => {
//     console.log("get working");
//     res.json({
//         ok: true
//     })
// })


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})