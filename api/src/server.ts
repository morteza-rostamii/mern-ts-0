import express from 'express'
import dotenv from 'dotenv'

// import routes
import usersRouter from './modules/user/users.route'
import errors from './middles/errors.middle';

// .env
dotenv.config();

const PORT = process.env.PORT || 3000;

// app
const app = express();
// parse json
app.use(express.json());

// middleware: run on each request =: has to come before routes.
/* app.use((req, res, next) => {
    console.log(`${req.method} ${req.ip} ${req.originalUrl}`);
    next();
}); */ 

// register routes
app.use('/users', usersRouter);

// Catch-all route
app.use ('*', (req, res) => {
    // Do something with the request and response
    res.send ('This is a catch-all route');
});

// error handler middleware: has to come after all routes and middlewares
app.use(errors.logger);

// start node server
app.listen(PORT, () => {
    console.log(`node running at: ${PORT}`);
});
