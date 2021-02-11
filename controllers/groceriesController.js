const express = require('express');
const router = express.Router();

const Groceries = require('../models').Groceries;
const User = require('../models').User;

router.get('/', (req, res) => {
    Groceries.findAll().then((groceries) => {
        console.log(Groceries)
    res.render('groceries/index.ejs', {
        groceries: groceries,
    })
})
});

router.get('/new', (req, res) => {
    res.render('groceries/new.ejs');
});

router.post('/', (req, res)=>{
    Groceries.create(req.body).then((newGroceries) => {
    res.redirect('/groceries');
    })
});

router.get('/:id/edit', (req, res) =>{
    Groceries.findByPk(req.params.id).then((Groceries) => {
        res.render('groceries/edit.ejs', { 
			Groceries: Groceries
        })
    })
});

router.put('/:id', (req, res) => { 
	Groceries.update(req.body, {
        where: { id: req.params.id},
        returning: true,
    }).then((Groceries) => {
    res.redirect('/Groceries'); 
})
});

router.get("/:id", (req, res) => {
    Groceries.findByPk(req.params.id, {
        include : [User]
    })
    .then(Groceries => {
        res.render('groceries/show.ejs', {
            Groceries: Groceries
        });
    })
})

router.delete('/:id', (req, res) =>{
    Groceries.destroy({where: { id: req.params.id } }).then(() => {
    res.redirect('/groceries');  
})
})


module.exports = router;