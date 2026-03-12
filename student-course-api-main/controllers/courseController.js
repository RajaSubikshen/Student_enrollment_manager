const service = require("../services/courseService")

exports.getCourses = (req,res)=>{

    const courses = service.getCourses()

    res.json(courses)
}

exports.createCourse = (req,res)=>{

    const course = service.createCourse(req.body)

    res.json(course)
}
exports.deleteCourse = (req,res)=>{

    const id = req.params.id

    service.removeCourse(id)

    res.json({message:"Course deleted"})
}