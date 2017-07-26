const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/hello', function(req, res) {
   res.send({
     data: {
       name: 'hww',
     }
   }); 
})

router.get('/production', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
})

module.exports = router;