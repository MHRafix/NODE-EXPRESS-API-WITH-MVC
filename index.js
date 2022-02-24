const express = require('express');
const userRouter = require('./routes/users.route');
const app = express();
const PORT = process.env.PORT || 3000;

// Express default body parser here
app.use(express.urlencoded({extended: true}));
app.use(userRouter);

// App home route here
app.get('/', (req, res) => {
    res.send('THIS IS SERVER HOME ROUTE!');
});ss

// App is listening here
app.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON PORT', PORT);
});

// 404 page route here
app.use((req, res, next) => {
    res.send('<h1>404 Page not found!</h1>');
})