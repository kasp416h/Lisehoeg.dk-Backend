const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post("/unlinkFile", (req, res) => {
    const file = req.body.file;
    console.log(file);
    fs.unlinkSync(path.join(__dirname, '..', 'slideshow', file));
});

module.exports = router;