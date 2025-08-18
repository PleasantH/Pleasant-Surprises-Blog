const express = require('express');
const router = express.Router();

//Routes
router.get ('', (req, res) => {
    const locals = {
        title: 'Pleasant Surprises Blog',
        description: 'Welcome to the Pleasant Surprises Blog'
    }
  res.render('index', {locals});
});

router.get ('/about', (req, res) => {
  res.render('about');
});


module.exports = router;