const {readData,writeData} = require("../utils/fileHandler")
const generateId = require("../utils/idGenerator")

const FILE = "./data/courses.json"

exports.getCourses = function(){

    return readData(FILE)
}

exports.createCourse = function(data){

    const courses = readData(FILE)

    const course = {
        id: generateId(courses),
        title: data.title,
        maxStudents: data.maxStudents,
        students:[]
    }

    courses.push(course)

    writeData(FILE,courses)

    return course
}
exports.removeCourse = function(id){

    const courses = readData(FILE)      
    
    const newCourses = courses.filter(c=>c.id != id)
    
    writeData(FILE,newCourses)
}