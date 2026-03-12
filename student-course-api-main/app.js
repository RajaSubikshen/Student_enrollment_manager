const express = require("express")
const app = express()

const studentRoutes = require("./routes/students")
const courseRoutes = require("./routes/courses")
const enrollmentRoutes = require("./routes/enrollments")

const logger = require("./middleware/logger")

app.use(express.json())

app.use(logger)

app.use("/students", studentRoutes)
app.use("/courses", courseRoutes)
app.use("/enroll", enrollmentRoutes)

app.get("/", (req,res)=>{
    res.send("Student Course Enrollment API")
})

module.exports = app