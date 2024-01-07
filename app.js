const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require("mongoose");

const cors = require("cors");
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

//Request rate Limit
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 2000
})
app.use(limiter)

//Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected')
}).catch((err) => {
    console.log(err)
})

//Routing implementation
const router = require('./src/routes/api');
app.use("/api", router);
app.use('*', (req, res) => {
    if (req.baseUrl === '') {
        res.status(200).send('<h1 style="text-align:center">Module 18 Assignment</h1>')
    } else {
        res.status(404).send('<h1 style="text-align:center">404 Not Found<h1>')
    }
})


module.exports = app;