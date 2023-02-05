const express = require('express');
const router = express.Router();

router.post("/appendFile", (req, res) => {
    const file = req.files.file;
    const filename = req.files.file.name;
    console.log(filename);
    file.mv("./slideshow/" + filename);
});

module.exports = router;