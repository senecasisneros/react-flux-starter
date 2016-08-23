'use strict';

const express = require('express');
const router = express.Router();

const Name = require('../models/name');

// router.put('/:id/toggle', (req, res) => {
//
//   Name.toggle(req.params.id, (err, savedName) => {
//     if(err) {
//       return res.status(400).send(err);
//     }
//
//     Name.find({}, (err, names) => {
//       res.status(err ? 400 : 200).send(err || names);
//     });
//   });
// })

router.route('/')
  .get((req, res) => {
    Name.find({}, (err, names) => {
      res.status(err ? 400 : 200).send(err || names);
    });
  })
  .post((req, res) => {
    Name.create(req.body, (err, newName) => {
      res.status(err ? 400 : 200).send(err || newName);
    });
  });

router.route('/:id')
  .get((req, res) => {
    Name.findById(req.params.id, (err, name) => {
      res.status(err ? 400 : 200).send(err || name);
    });
  })
  .delete((req, res) => {
    Name.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    })
  })
  .put((req, res) => {
    Name.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, name) => {
      if(err) {
        return res.status(400).send(err);
      }

      Name.find({}, (err, names) => {
        res.status(err ? 400 : 200).send(err || names);
      });
    });
  })

module.exports = router;
