require('dotenv').config()
const express = require('express');
const app = express();
const methodOverride = require('method-override')

// Middleware start
app.use(express.static('public'));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// middleware end
app.use("/users", require("./controllers/usersController.js"));
app.use("/parts", require("./controllers/partsController.js"));
app.use("/groceries", require("./controllers/groceriesController.js"));
app.use("/auth", require("./controllers/authController.js"));

// Users Index page, landing page
app.get("/", (req,res) =>{
    res.render("users/index.ejs", {   
     });   
 });

app.listen(process.env.PORT, () => {
    console.log('I am listening');
})