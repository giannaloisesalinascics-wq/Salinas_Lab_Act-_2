const db = require("../config/db"); // adjust if your db file is in a different folder

// CREATE (POST)
exports.createCourse = (req, res) => {
const { code, title, units } = req.body;
const sql = "INSERT INTO courses (code, title, units) VALUES (?, ?, ?)";
db.query(sql, [code, title, units], (err, result) => {
if (err) return res.status(500).json({ error: err });
res.status(201).json({ message: "Course added", id: result.insertId });
});
};

// READ ALL (GET)
exports.getAllCourses = (req, res) => {
db.query("SELECT * FROM courses", (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
};

// READ ONE (GET by ID)
exports.getCourseById = (req, res) => {
const { id } = req.params;
db.query("SELECT * FROM courses WHERE id = ?", [id], (err, results) => {
if (err) return res.status(500).json({ error: err });
if (results.length === 0) return res.status(404).json({ message: "Course not found" });
res.json(results[0]);
});
};

// UPDATE (PUT)
exports.updateCourse = (req, res) => {
const { id } = req.params;
const { code, title, units } = req.body;
const sql = "UPDATE courses SET code = ?, title = ?, units = ? WHERE id = ?";
db.query(sql, [code, title, units, id], (err, result) => {
if (err) return res.status(500).json({ error: err });
res.json({ message: "Course updated" });
});
};

// DELETE
exports.deleteCourse = (req, res) => {
const { id } = req.params;
db.query("DELETE FROM courses WHERE id = ?", [id], (err, result) => {
if (err) return res.status(500).json({ error: err });
res.json({ message: "Course deleted" });
});
};