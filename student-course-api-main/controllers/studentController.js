const service = require("../services/studentService")

exports.getStudents = (req,res)=>{

    const students = service.getStudents()

    res.json(students)
}

exports.registerStudent = (req,res)=>{

    const student = service.register(req.body)

    res.json(student)

}

exports.deleteStudent = (req,res)=>{

    const id = req.params.id

    service.removeStudent(id)

    res.json({message:"deleted"})
}