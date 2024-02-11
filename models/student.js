// models/student.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    grade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Student;
