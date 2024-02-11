// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', async (req, res) => {
    const allStudents = await studentController.getAllStudents();
    res.json(allStudents);
});

router.get('/:id', async (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = await studentController.getStudentById(studentId);
    console.log('jhkhkjhkh')
    if (student) {
        console.log('the student ===> ', student)
        res.json(student);
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});

router.post('/', async (req, res) => {
    const { name, age, grade } = req.body;
    const newStudent = await studentController.createStudent(name, age, grade);
    res.status(201).json(newStudent);
});

router.put('/:id', async (req, res) => {
    const studentId = parseInt(req.params.id);
    const { name, age, grade } = req.body;
    const updatedStudent = await studentController.updateStudent(studentId, name, age, grade);
    if (updatedStudent) {
        res.json(updatedStudent);
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});

router.delete('/:id', async (req, res) => {
    const studentId = parseInt(req.params.id);
    const deleted = await studentController.deleteStudent(studentId);
    if (deleted) {
        res.json({ message: 'Student deleted successfully' });
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});

module.exports = router;
