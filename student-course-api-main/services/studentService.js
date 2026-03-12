const {readData,writeData} = require("../utils/fileHandler")
const generateId = require("../utils/idGenerator")

const FILE = "./data/students.json"

exports.getStudents = function(){

    return readData(FILE)
}

exports.register = function(data){

    const students = readData(FILE)

    const student = {
        id: generateId(students),
        name: data.name,
        email: data.email
    }

    students.push(student)

    writeData(FILE, students)

    return student
}

exports.removeStudent = function(id){

    const students = readData(FILE)

    const newList = students.filter(s=>s.id != id)

    writeData(FILE,newList)
}