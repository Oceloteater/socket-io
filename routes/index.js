const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ response: 'Connected to node server 1.0'}).status(200);
});

module.exports = router;