var express = require('express');
var router = express.Router();

router.get('/ejs', (req, res) => {
    res.render('template', {data: "test data"});
})

module.exports = router;