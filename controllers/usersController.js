const express = require("express");
const router = express.Router();
const User = require('../models').User;
const parts = require('../models').parts;
const Groceries = require('../models').Groceries;

// This item was moved to the server.js file
// Index page, landing page
// router.get("/", (req,res) =>{
//    res.render("users/index.ejs", {   
//     });   
// });

// The items commented out below were moved to the auth controller 
// Login get route
// router.get('/login', (req, res) => {
//     res.render('users/login.ejs');  
// });

// Login post
// router.post('/login', (req, res)=>{
//     User.findOne({
//       where:{
//         username:req.body.username,
//         password:req.body.password
//       }
//     }).then((thisUser) => {
//       res.redirect('/users/profile/'+thisUser.id);
//       console.log(thisUser)
//     })  
//   })

// Signup get route
// router.get('/signup', (req, res) => {
//     res.render('users/signup.ejs');
// });  

// Signup post route
// router.post('/', (req, res)=>{
//   User.create(req.body).then((newUser) => {
//     res.redirect("users/profile/"+newUser.id);
//   });
// });

// Update put route
router.put("/profile/:id", (req, res) => {
    User.update(req.body, {
  where: { id: req.params.id },
  returning: true,
  }).then((user) => {
          res.redirect("/users/profile/" + req.params.id);
     });
  }); 
  
// Profile page get route
router.get("/profile/:id", (req, res) => {
    User.findByPk(req.params.id, {
        include: [
          {
            model: parts,
            attributes: ["id", "name"],
          },
          {
            model: Groceries,
            attributes: ["id", "name"],
          }
        ],
    }).then ((thisUser) =>{
      console.log(thisUser)
      res.render("users/profile.ejs", {
        user: thisUser,
        index: thisUser.id,
       
      });
       })
     });
    
// Delete route
router.delete('/:id', (req, res) =>{
    User.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect("/users");
    });
    });
      












module.exports = router;