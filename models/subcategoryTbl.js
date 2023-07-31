const mongoose = require('mongoose')

const crudschema = mongoose.Schema({
    categoryId : {
        type : String,
        require : true
    },
    subcategory : {
        type : String,
        require : true
    },
    status :{
        type : String,
        require : true
    }
})

const crud = mongoose.model('subcatcrud',crudschema)

module.exports = crud