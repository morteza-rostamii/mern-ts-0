import express from 'express'

// import routes
import usersRouter from './modules/user/users.route'

const PORT = 4000;

// app
const app = express();
express.json();

// middleware: run on each request =: has to come before routes.
app.use((req, res, next) => {
    console.log(`${req.method} ${req.ip} ${req.originalUrl}`);
    next();
}); 

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
