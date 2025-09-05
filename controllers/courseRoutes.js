const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// CRUD routes
router.post("/", courseController.createCourse); // CREATE
router.get("/", courseController.getAllCourses); // READ ALL
router.get("/:id", courseController.getCourseById); // READ ONE
router.put("/:id", courseController.updateCourse); // UPDATE
router.delete("/:id", courseController.deleteCourse); // DELETE

module.exports = router;