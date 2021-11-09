const { Schema, model } = require('mongoose');

const imagesSchema = new Schema(
    {
        imageUrl: {type: String, required: true}
    }, 
    {
        timestamps: true,
        versionKey: false
    })

module.exports = model('Images', imagesSchema);