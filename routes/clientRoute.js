const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/api/slidenauth', (req, res) => {
    const images = fs.readdirSync(path.join(__dirname, '..', 'slideshow'));
    const cookies = req.cookies.admin_access || false;
    res.json({ slideshow: images, auth: cookies });
});

module.exports = router;