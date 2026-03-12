function validateStudent(req,res,next){

    if(!req.body.name){
        res.json({error:"Name required"})
    }

    next()
}

module.exports = {
    validateStudent
}