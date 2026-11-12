const express = require('express');

const checklists = require('../data/checklists');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Checklists', checklists });
});

router.get('/checklists/:slug', (req, res, next) => {
  const checklist = checklists.find((item) => item.slug === req.params.slug);
  if (!checklist) return next();

  res.render('checklist', { title: checklist.title, checklist });
});

module.exports = router;
