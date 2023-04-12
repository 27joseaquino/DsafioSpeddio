const express = require("express");
const app = express();
const mongoose = require("mongoose");
const urlRoutes = require('./router/urlRouter')
const userRoutes = require('./router/userRouter')

app.use(
    express.urlencoded({
        extended: true,
    })
);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})
app.use(express.json());

app.use('/', urlRoutes)
app.use('/register', userRoutes)


mongoose
    .connect(
        "mongodb+srv://matheus:B1b58u0OCw93Pvk6@cluster0.auaizug.mongodb.net/BancoShotLink?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Connected database");
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

