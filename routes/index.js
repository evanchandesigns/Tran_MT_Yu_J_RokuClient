const express = require('express');
const router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('/roku', createProxyMiddleware({
    target: 'http://localhost:5000',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.get('/', (req, res) => {
    res.render('login',
        {
            layout: "LoginLayout.hbs",
        })
})

router.get('/movies', (req, res) => {
    res.render('movies',
        {
            layout: "moviesLayout.hbs",
        })
})

router.use((req, res) => {
    res.status(404);
    res.render("error",
        {
            layout: "errorLayout.hbs",
            errormessage: `You are in the Error Zone! "${req.url}" doesn't exist.`
        });
})

module.exports = router;