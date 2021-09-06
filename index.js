//MYSQL
const mysql = require ('mysql2');
//Inquirer
const inquirer = require ('inquirer');
// Console Table
const cTable = require ('console.table');

const db = require('./db/connection');

function startApp () {
    inquirer.prompt({
            type: 'list',
            name: 'menu',
            message: 'What Would You Like to Do?',
            choices: ['View All Employees', 'View All Departments', 'View All Job Roles'],
        }).then ( answer => {
            switch (answer.menu){
                case 'View All Employees':
                    viewEmployees ();
                    break;
                case 'View All Departments':
                    viewDepartments ();
                    break;
               case 'View All Job Roles':
                   viewRoles ();
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

function viewDepartments () {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
        startApp();
    });
};

function viewRoles () {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.table(result);
        startApp();
    });
};

startApp();