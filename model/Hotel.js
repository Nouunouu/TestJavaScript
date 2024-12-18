
var mongoose = require('mongoose')
var schema =  mongoose.Schema 
var HotelSchema = new schema({ 
    name:String,
    fabrication_date:Date,
    nbr_room: {
        type: Number,
        default: 10
    }

})

    module.exports = mongoose.model('Hotels',HotelSchema)

