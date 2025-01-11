const express = require('express')
const app = express()
const cors = require("cors");
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
require('dotenv').config()




//middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route")
const userRoutes =  require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")


app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)


async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use("/" , (req,res) => {
        res.send("Book store running")
    })
}

main().then(() => console.log("MongoDB connected")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})