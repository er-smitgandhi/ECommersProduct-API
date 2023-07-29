const categoryTbl = require('../models/categoryTbl')

const addcategory = async(req,res)=>{
    try {
        let addcat = await categoryTbl.create({
            category : req.body.category
        })
        if(addcat){
            return res.json({status : 1,message : "Category Add Successfully"})
        }
        else{
            return res.json({status : 0,message : "Category not Add"})
        }
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

module.exports = {addcategory}