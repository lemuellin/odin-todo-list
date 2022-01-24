import {initDOM, createDOM} from './DOM.js';
import {todoItem, createProjectAlgor} from './algor.js';
import './style.css';

// Variables
let project = []; // all todos goes here
let sortedProject = []; // sorted all todos based on project#
let projectList = []; // all projects goes here
let currentProject;

initDOM();

//#region Initialization - create Default Projects and Todo Items
createProjectAlgor("Family", projectList);
project.push(todoItem('title11', 'description11', 'project0', "incomplete"));
project.push(todoItem('title12', 'description12', 'project0', "incomplete"));
project.push(todoItem('title13', 'description13', 'project0', "incomplete"));

createProjectAlgor("Work", projectList);
project.push(todoItem('title21', 'description21', 'project1', "incomplete"));
project.push(todoItem('title22', 'description22', 'project1', "incomplete"));

createProjectAlgor("Hobbies", projectList);
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
    for (let i = 0; i < projectList.length; i++){
        const _projectButton = document.querySelector(`.projects${i}`);
        _projectButton.addEventListener('click', () => {
            currentProject = `project${i}`;

            // clear the main panel
            while(todoList.firstChild){todoList.firstChild.remove()};

            for (let eachTodo = 0; eachTodo < sortedProject[i].length; eachTodo++){
                createDOM.item(sortedProject[i][eachTodo], sortedProject, i, eachTodo); //, sortedProject[i], eachTodo+1);
            }
        });
    }
}
projectButton();

// Create Project Submit Button
const projectSubmit = document.querySelector('.projectSubmit');
projectSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    createProjectAlgor(document.querySelector('.projectInput').value, projectList);
    projectButton();
});

// Create ToDo Item Submit Button
const itemSubmit = document.querySelector('.itemSubmit');
itemSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // submit new todo to project
    let todo = todoItem(document.querySelector('.title').value, document.querySelector('.description').value, currentProject, "incomplete")
    
    let nthProject = currentProject.slice(7,currentProject.length);
    sortedProject[nthProject].push(todo);

    //create DOM and behavior
    createDOM.item(todo, sortedProject, nthProject, sortedProject[nthProject].length-1); //, sortedProject[string], sortedProject[string].length-1);
});

export{
    projectButton,
};
// need a current Item number to delete or edit the item



