const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("../models").User;

// Login get route
router.get('/login', (req, res) => {
    res.render('users/login.ejs');  
});

// Login post
router.post('/login', (req, res)=>{
    User.findOne({
      where:{
        username:req.body.username,
       }
    }).then((foundUser) => {
        if (foundUser) {
          bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
            if (match) {
              res.redirect(`/users/profile/${foundUser.id}`);
            } else {
              return res.sendStatus(400);
            }
          });
        }
      });
    });

// Signup get route
router.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});  

// Signup post route
router.post('/', (req, res)=>{
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).json(err);
    
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
          if (err) return res.status(500).json(err);
          req.body.password = hashedPwd;
          
  User.create(req.body).then((newUser) => {
    res.redirect("users/profile/"+newUser.id);
})
.catch((err) => {
  console.log(err);
  res.send(`err ${err}`);
});
});
  });
});  


module.exports = router;