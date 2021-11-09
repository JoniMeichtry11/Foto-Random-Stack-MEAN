const imagesCtrl = {}

const Images = require('../models/images')

imagesCtrl.getImages = async (req, res) => {
    const images = await Images.find()
    res.json(images);
}

imagesCtrl.createImages = async (req, res) => {
    const newImage = new Images(req.body)
    await newImage.save()
    res.send({message: 'Imagen Creada'});
}

module.exports = imagesCtrl;