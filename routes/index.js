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
            layout: "loginLayout.hbs",
        })
})

router.get('/profile', (req, res) => {
    res.render('profile',
        {
            layout: "loginLayout.hbs",
        })
})

router.get('/movies-parents', (req, res) => {
    res.render('moviesparents',
        {
            layout: "appLayout.hbs",
        })
})

router.get('/movies-kids', (req, res) => {
    res.render('movieskids',
        {
            layout: "appLayout.hbs",
        })
})

router.get('/tvs', (req, res) => {
    res.render('tvs',
        {
            layout: "appLayout.hbs",
        })
})

router.get('/music', (req, res) => {
    res.render('music',
        {
            layout: "appLayout.hbs",
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