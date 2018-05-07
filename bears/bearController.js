const router = require('express').Router();

const Bear = require('./bearModel');

router
  .route('/')
  .get(get)
  .post(post);

router
  .route('/:id')
  .get((req, res) => {
    Bear.find().then(bears => {
      res.status(200).json(bears);
    });
  })
  .delete((req, res) => {
    res.status(200).json({ status: 'please implement DELETE functionality' });
  })
  .put((req, res) => {
    res.status(200).json({ status: 'please implement PUT functionality' });
  });

  function get(req, res) {
    res.status(200).json({ route: '/api/bears/' });
  };

  function post(req, res) {
    const bearData = req.body;

    const bear = new Bear(bearData);

    bear
      .save()
      .then(bear => {
        res.status(201).json(bear);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  };

module.exports = router;
