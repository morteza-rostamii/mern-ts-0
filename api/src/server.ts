import express from 'express'

// import routes
import usersRouter from './modules/user/users.route'

// app
const app = express();

const PORT = 4000;

// register routes
app.use('/users', usersRouter);

// Catch-all route
app.use ('*', (req, res) => {
    // Do something with the request and response
    res.send ('This is a catch-all route');
});

// start node server
app.listen(PORT, () => {
    console.log(`node running at: ${PORT}`);
});
