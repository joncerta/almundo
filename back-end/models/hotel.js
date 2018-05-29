'sue strcit';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelSchema = Schema({
    id: String,
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: Array
});

module.exports = mongoose.model('Hotel', HotelSchema);