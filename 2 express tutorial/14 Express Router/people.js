const express = require('express');
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman, 
  updatePerson, 
  deletePerson
} = require('./Controller/people')

router.get('/', getPeople);
router.post('/', createPerson)
router.post('/postman', createPersonPostman)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

module.exports = router;