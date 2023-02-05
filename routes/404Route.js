const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.all("*", (req, res) => {
    res.status(404)
    if (req.accepts('json')) {
        res.json({ message: '404 Not Found '})
    } else {
        res.type('txt').send('404 Not Fround')
    };
});

module.exports = router;