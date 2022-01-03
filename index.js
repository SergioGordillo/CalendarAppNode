const express = require('express');

const app = express();


app.get("/", (req, res) => {
    console.log("get working");
    res.json({
        ok: true
    })
})


app.listen(4000, () => {
    console.log(`Server running on port ${4000}`);
})