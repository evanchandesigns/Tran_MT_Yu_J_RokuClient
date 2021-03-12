const express = require('express');
const router = express.Router();

// This is where we would add our middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('/roku', createProxyMiddleware({
    target: 'http://localhost:5000',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.get('/', (req, res) => {
    res.render('index',
        {
            message: "Hi there! From handlebars!"
        })
})

router.get('/users', (req, res) => {
    res.render('index',
        {
            message: "Hi there, users!"
        })
})

// Other routes that you might use
router.use((req, res) => {
    res.status(404);
    res.render("error",
        {
            layout: "errorLayout.hbs",
            errormessage: `You are in the Error Zone! "${req.url}" doesn't exist.`
        });
})

module.exports = router;