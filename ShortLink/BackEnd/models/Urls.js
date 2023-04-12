const mongoose = require('mongoose');

const Urls = mongoose.model('Urls', {
    link: String,
    shortUrl: String,
    count: Number,
    idUser: String

})

module.exports = Urls