const {Router} = require('express');

const {
    getAllUsers,
    createUser,
    updateUser,
    upadatePartialUser,
    deleteUser
} = require('../controllers/users.controllers')
const router = Router();

router.get('/',getAllUsers);
router.put('/:id',updateUser);
router.post('/',createUser);
router.patch('/:id',upadatePartialUser);
router.delete('/:id',deleteUser);

module.exports = router;