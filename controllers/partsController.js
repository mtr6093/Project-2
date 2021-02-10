const express = require('express');
const router = express.Router();

const parts = require('../models').parts;
const User = require('../models').User;

router.get('/', (req, res) => {
    parts.findAll().then((parts) => {
    res.render('index.ejs', {
        parts: parts,
    })
})
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.post('/', (req, res)=>{
    parts.create(req.body).then((newParts) => {
    res.redirect('/parts');
    })
});

router.get('/:id/edit', (req, res) =>{
    parts.findByPk(req.params.id).then((parts) => {
        res.render('edit.ejs', { 
			parts: parts
        })
    })
});

router.put('/:id', (req, res) => { 
	parts.update(req.body, {
        where: { id: req.params.id},
        returning: true,
    }).then((parts) => {
    res.redirect('/parts'); 
})
});

router.get("/:id", (req, res) => {
    parts.findByPk(req.params.id, {
        include : [User]
    })
    .then(parts => {
        res.render('show.ejs', {
            parts: parts
        });
    })
})

router.delete('/:id', (req, res) =>{
    parts.destroy({where: { id: req.params.id } }).then(() => {
    res.redirect('/parts');  
})
})


module.exports = router;