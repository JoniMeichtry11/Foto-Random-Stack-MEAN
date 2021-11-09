const { Router } = require('express');
const router = Router();

const imagesCtrl = require('../controllers/images.controller.js');

router.get('/', imagesCtrl.getImages);
router.post('/', imagesCtrl.createImages);

module.exports = router;

