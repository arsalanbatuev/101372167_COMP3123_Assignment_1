const express = require('express');
const router = express.Router();
const { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } = require('./employeeController');

router.get('/employees', getAllEmployees);
router.get('/employees/:eid', getEmployeeById);
router.post('/employees', createEmployee);
router.put('/employees/:eid', updateEmployee);
router.delete('/employees', deleteEmployee);

module.exports = router;
