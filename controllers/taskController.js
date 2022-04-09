const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Index

router.get('/', (req, res) => {
  Task.find({}, (error, allTasks) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'Success',
        tasks: allTasks
      })
    }
  })
})

// Delete

router.delete('/:id', (req, res) => {
  Task.deleteOne(req.params.id, (error, deletedTask) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'Success'
      })
    }
  })
})

// Update

router.put('/:id', (req, res) => {
  Task.updateOne({
    _id: req.params.id
  }, (error, updatedTask) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'Success'
      })
    }
  })
})

// Create

router.post('/', (req, res) => {
  Task.create(req.body, (error, createdTask) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'Success'
      })
    }
  })
})

// Show

router.get('/:id', (req, res) => {
  Task.findOne({
    _id: req.params.id
  }, (error, foundTask) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.json({
        message: 'Success',
        task: foundTask
      })
    }
  })
})

module.exports = router;