require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./db.js");
const PORT = process.env.PORT || 3000;
const productRoutes = require("./routes/product.routes.js");
app.use(express.json());
app.use(productRoutes);

app.get("/", (req, res) => {
    res.send(`<h1>Hello!</h1>`)
});

db.then(() => {
    app.listen(PORT, () => console.log(`Application is listening at port ${PORT}`));
    })
.catch((err) => console.log(err.message));
