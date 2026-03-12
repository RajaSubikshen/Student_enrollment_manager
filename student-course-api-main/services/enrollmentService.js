const {readData,writeData} = require("../utils/fileHandler")

const COURSE_FILE = "./data/courses.json"

exports.enroll = function(studentId,courseId){

    const courses = readData(COURSE_FILE)

    const course = courses.find(c => c.id == courseId)

    if(!course){
        throw new Error("Course not found")
    }

    if(!course.students){
        course.students = []
    }

    if(course.students.includes(studentId)){
        throw new Error("Student already enrolled")
    }

    if(course.students.length >= course.maxStudents){
        throw new Error("Course full")
    }

    course.students.push(studentId)

    writeData(COURSE_FILE,courses)

    return {message:"enrolled"}
}

exports.drop = function(studentId,courseId){

    const courses = readData(COURSE_FILE)

    const course = courses.find(c=>c.id == courseId)

    course.students = course.students.filter(id => id != studentId)
    
    writeData(COURSE_FILE,courses)

    return {message:"dropped"}
}

exports.getStudents = function(courseId){

    const courses = readData(COURSE_FILE)

    const course = courses.find(c=>c.id == courseId)

        if(!course){
        throw new Error("Course not found")
    }

    if(!course.students){
        return [] 
    }


    return course.students +" sudents enrolled for this course"
}