    const express = require("express")
    const router = express.Router()

    const controller = require("../controllers/studentController")

    router.get("/", controller.getStudents)

    router.post("/register", controller.registerStudent)

    router.delete("/:id", controller.deleteStudent)

    module.exports = router