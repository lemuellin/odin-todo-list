import {initDOM, createDOM} from './DOM.js';
import {todoItem, createProjectAlgor} from './algor.js';
import './style.css';

// Variables
let project = []; // all todos goes here
let sortedProject = []; // sorted all todos based on project#
let projectList = []; // all projects goes here
let currentProject;
let projectCounter = 0;

initDOM();

//#region Initialization - create Default Projects and Todo Items
createProjectAlgor("Inbox", projectList); projectCounter++;
project.push(todoItem('title11', 'description11', 'project0', "incomplete"));
project.push(todoItem('title12', 'description12', 'project0', "incomplete"));
project.push(todoItem('title13', 'description13', 'project0', "incomplete"));

createProjectAlgor("Work", projectList); projectCounter++;
project.push(todoItem('title21', 'description21', 'project1', "incomplete"));
project.push(todoItem('title22', 'description22', 'project1', "incomplete"));

createProjectAlgor("Hobbies", projectList); projectCounter++;
project.push(todoItem('title31', 'description31', 'project2', "incomplete"));
project.push(todoItem('title32', 'description32', 'project2', "incomplete"));
project.push(todoItem('title33', 'description33', 'project2', "incomplete"));
project.push(todoItem('title34', 'description34', 'project2', "incomplete"));

//#endregion

// Sort todos based on project#
function sortTodo (){
    for (let i = 0; i< projectList.length; i++){
        sortedProject[i] = project.filter(todo => todo.project == `project${i}`);
    }
    return sortedProject;
}
sortTodo();

// Project Button Behavior
const todoList = document.querySelector('.todoList');
function projectButton() {
    const _projectList = document.querySelector('.projectList');
    const projectListChild = _projectList.children;
    // Loop through nodes of a parent
    for (let i = 0; i < projectListChild.length; i++){
        const child = projectListChild[i];
        child.addEventListener('click', () => {
            currentProject = i;            

            for (let j = 0; j < projectListChild.length; j++){
                projectListChild[j].classList.remove('pressed');
            }

            child.classList.add('pressed');

            // clear the main panel
            while(todoList.firstChild){todoList.firstChild.remove()};

            if (sortedProject[i]){
                for (let eachTodo = 0; eachTodo < sortedProject[i].length; eachTodo++){
                    createDOM.item(sortedProject[i][eachTodo], sortedProject, i, eachTodo); //, sortedProject[i], eachTodo+1);
                }
            }
        });
    }
}
projectButton();
document.querySelector('.projects0').click();
document.querySelector('.projects0').focus();

// Create Project Submit Button

const projectSubmit = document.querySelector('.projectSubmit');
projectSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    createProjectAlgor(document.querySelector('.projectInput').value, projectList);
    projectCounter++;
    projectButton();
});

// Create ToDo Item Submit Button
const itemSubmit = document.querySelector('.itemSubmit');
itemSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // submit new todo to project
    let todo = todoItem(document.querySelector('.title').value, document.querySelector('.description').value, currentProject, "incomplete")

    if (sortedProject[currentProject]){
        sortedProject[currentProject].push(todo);
    } else {
        sortedProject[currentProject]=[];
        sortedProject[currentProject].push(todo);
    }

    //create DOM and behavior
    createDOM.item(todo, sortedProject, currentProject, sortedProject[currentProject].length-1);
});

// Edit Project Button
const editProject = document.querySelector('.editProject');
editProject.addEventListener('click', (e) => {
    e.preventDefault();


});

// Delete Project Button
const deleteProject = document.querySelector('.deleteProject');
deleteProject.addEventListener('click', () => {
// Remove DOM
    const _projectList = document.querySelector('.projectList');
    _projectList.removeChild(document.querySelector(`.projects${currentProject}`));

// Remove object from projectList array
    projectList.splice(currentProject,1);

// Remove object from todoList
    sortedProject.splice(currentProject,1);

// clear the main panel
    while(todoList.firstChild){todoList.firstChild.remove()};

    projectButton();
});

// Edit Item Button

// Show Item Info


export{
    projectButton,
    projectCounter,
};