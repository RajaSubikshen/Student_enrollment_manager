const express = require("express")
const router = express.Router()

const controller = require("../controllers/courseController")

router.get("/", controller.getCourses)

router.post("/create", controller.createCourse)

router.delete("/:id", controller.deleteCourse)


module.exports = router