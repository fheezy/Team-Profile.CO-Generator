const Intern = require('./Intern');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const logic = require('logic')

const teamManQuestions= () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'teamManName',
                message: "What is your team manager's name?",
                validate: manName => {
                    if (!manName) {
                        return false;
                    } 
                    return true;
                }
            },
            {
                type: 'input',
                name: 'teamManId',
                message: "What is your team manager's employee ID?",
                validate: teamManEmpId => {
                    if (!teamManEmpId) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'teamManEmail',
                message: "What is your team manager's email?",
                validate: teamManEm => {
                    if (!teamManEm) {
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'teamManOfficeNum',
                message: "What is your team manager's office number?",
                validate: teamManOfficeNumber => {
                    if (!teamManOfficeNumber) {
                        return false;
                    }
                    return true;
                }
            }
        ])
}



module.exports = Logic;