//MYSQL
const mysql = require('mysql2');
//Inquirer
const inquirer = require('inquirer');
// Console Table
const cTable = require('console.table');
const db = require('./db/connection');



function startApp() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'What Would You Like to Do?',
        choices: ['View All Employees', 'View All Departments', 'View All Job Roles', 'Add A Department', 'Add A Job Role', 'Add A New Employee', 'Update Employee Role'],
    }).then(answer => {
        switch (answer.menu) {
            case 'View All Employees':
                viewEmployees();
                break;
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Job Roles':
                viewRoles();
                break;
            case 'Add A Department':
                addDepartment();
                break;
            case 'Add A Job Role':
                addJob();
                break;
            case 'Add A New Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
        }
    })

};

function viewEmployees() {
    const sql = `SELECT employee.id,
                employee.first_name,
                employee.last_name,
                role.title AS job_title,
                department.department_name,
                role.salary,
                CONCAT(manager.first_name, ' ' ,manager.last_name) AS manager
                FROM employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id
                LEFT JOIN employee AS manager ON employee.manager_id = manager.id
                ORDER By employee.id`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
        startApp();
    });
};

function viewDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
        startApp();
    });
};

function viewRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
        startApp();
    });
};

function addDepartment() {
    inquirer.prompt([
        {
            name: 'department_name',
            type: 'input',
            message: 'What Department Would You Like to Add to the Database?'
        }
    ]).then((answer) => {
        const sql = `INSERT INTO department (department_name)
                     VALUES (?)`;
        const params = [answer.department_name];
        db.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log('THE DEPARTMENT HAS BEEN ADDED TO THE DATABASE');

            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    return;
                }
                console.table(result);
                startApp();
            });
        });
    });
};
function addJob() {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What Job Role Would You Like to Add to the Database?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'How Much Is the Salary For this Job Role? (do not use commas or periods)'
        },
        {
            name: 'department_id',
            type: 'input',
            message: 'Please Enter the Department ID Number the New Job Role Should Belong To:'
        },
    ]).then(function (response) {
        db.query("INSERT INTO role (title,salary,department_id) VALUES (?,?,?)", [response.title, response.salary, response.department_id], function (err) {
            if (err) throw (err);
            console.log('THE NEW JOB ROLE HAS BEEN CREATED');
            db.query(`SELECT * FROM role`, (err, result) => {
                if (err) {
                    return;
                }
                console.table(result);
                startApp();
            });
        });
    });
};

function addEmployee() {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Please Enter the First Name of the New Employee'
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Please Enter the Last Name of the New Employee'
        },
        {
            name: 'role_id',
            type: 'number',
            message: 'Please Enter the Role ID Number the New Employee Should Belong To:'
        },
        {
            name: 'manager_id',
            type: 'number',
            message: "Please Enter the ID Number of the Manager the New Employee Would Be Reporting To:"
        },
    ]).then(function (response) {
        db.query("INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)", [response.first_name, response.last_name, response.role_id, response.manager_id], function (err) {
            if (err) throw (err);
            console.log('THE NEW JOB EMPLOYEE HAS BEEN CREATED');
            db.query(`SELECT * FROM employee`, (err, result) => {
                if (err) {
                    return;
                }
                console.table(result);
                startApp();
            });
        });
    });
};

function updateEmployeeRole() {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Please Enter the First Name of the Employee You Want To Update'
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Please Enter the Last Name of the Employee You Want To Update'
        },
        {
            name: 'role_id',
            type: 'number',
            message: "Please Enter the Role ID Number For the Employee's New Role:"

        }
    ]).then(function (response) {
        db.query("UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?", [response.role_id, response.first_name, response.last_name], function (err) {
            if (err) throw err;
            console.log("YOUR EMPLOYEE'S ROLE HAS BEEN UPDATED");
            db.query(`SELECT * FROM employee`, (err, result) => {
                if (err) {
                    return;
                }
                console.table(result);
                startApp();
            });
        });
    });
};


startApp();