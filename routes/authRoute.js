const express = require('express');
const router = express.Router();

router.get(`/${process.env.SECRET_TOKEN}`, (req, res) => {
    res.cookie('admin_access', 'true', { maxAge: 2147483647, httpOnly: true });
    res.send('Admin Access Cookie Set');
})

module.exports = router;