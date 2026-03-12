const service = require("../services/enrollmentService")

exports.enrollStudent = (req,res)=>{

    const result = service.enroll(req.body.studentId, req.body.courseId)

    res.json(result)
}

exports.dropStudent = (req,res)=>{

    const result = service.drop(req.body.studentId, req.body.courseId)

    res.json(result)
}

exports.getCourseStudents = (req,res)=>{

    const list = service.getStudents(req.params.courseId)

    res.json(list)
}