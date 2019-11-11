const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller')

/* GET users listing. */
router.post('/login', function(req, res, next) {
  const { username, password } = req.body;
  if (!(username || password)) {
      res.status(401).send({ message : 'enter username or password' });
      return;
  } else {
   userController.authenticate(username, password , (id) => {
      if(id){
        res.status(200).send({ id, status: false});
      } else {
        res.status(200).send({id: null, status: false});
      }
    });
  }
});

module.exports = router;
