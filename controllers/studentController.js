// controllers/studentController.js
const Student = require('../models/student');

const getAllStudents = async () => {
    return await Student.findAll();
};

const getStudentById = async (id) => {
    return await Student.findByPk(id);
};

const createStudent = async (name, age, grade) => {
    return await Student.create({ name, age, grade });
};

const updateStudent = async (id, name, age, grade) => {
    const student = await getStudentById(id);
    if (student) {
        await student.update({ name, age, grade });
        return student;
    }
    return null;
};

const deleteStudent = async (id) => {
    const student = await getStudentById(id);
    if (student) {
        await student.destroy();
        return true;
    }
    return false;
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};
