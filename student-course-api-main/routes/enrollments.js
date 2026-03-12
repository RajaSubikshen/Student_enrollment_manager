const express = require("express")
const router = express.Router()

const controller = require("../controllers/enrollmentController")

router.post("/", controller.enrollStudent)

router.post("/drop", controller.dropStudent)

router.get("/:courseId", controller.getCourseStudents)

module.exports = router