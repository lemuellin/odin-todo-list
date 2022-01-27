import {initDOM, currentItem, createDOM, popupClose} from './DOM.js';
import './style.css';

// Todo Item Factory 
const todoItem = (title, description, project, status) => {
    const completeToggle = () => {
        status = (status == "complete") ? "incomplete" : "complete";
    }
    // dueDate, priority
    return {title, description, project, status, completeToggle};
};

// Create Project Algor
function createProjectAlgor(_name, projectList){
    projectList.push(_name);
    createDOM.project(projectList);
    projectCounter++;
}

// Variables
let project = []; // sorted all todos based on project#
let projectList = []; // all project names goes here
let currentProject;
let projectCounter = 0;

//#region Initialization - create Default Projects and Todo Items
initDOM();

let projectInit = [];

createProjectAlgor("Inbox", projectList); 
projectInit.push(todoItem('title11', 'description11', '0', "incomplete"));
projectInit.push(todoItem('title12', 'description12', '0', "incomplete"));
projectInit.push(todoItem('title13', 'description13', '0', "incomplete"));

createProjectAlgor("Work", projectList);
projectInit.push(todoItem('title21', 'description21', '1', "incomplete"));
projectInit.push(todoItem('title22', 'description22', '1', "incomplete"));

createProjectAlgor("Hobbies", projectList);
projectInit.push(todoItem('title31', 'description31', '2', "incomplete"));
projectInit.push(todoItem('title32', 'description32', '2', "incomplete"));
projectInit.push(todoItem('title33', 'description33', '2', "incomplete"));
projectInit.push(todoItem('title34', 'description34', '2', "incomplete"));

// Sort todos based on project#: go through projectList and filter the todos
for (let i = 0; i < projectList.length; i++){
    project[i] = projectInit.filter(todo => todo.project == `${i}`);
}
//#endregion

// Project Button Behavior
const todoList = document.querySelector('.todoList');
function projectButton() {
    const _projectList = document.querySelector('.projectList');
    // Loop through nodes of parent
    for (let i = 0; i < _projectList.children.length; i++){
        _projectList.children[i].addEventListener('click', () => {
            // Update variable - currentProject
            _projectList.children[i].classList.remove('project');
            currentProject = _projectList.children[i].classList[0].slice(8);
            _projectList.children[i].classList.add('project');

            // Add/Rmv 'pressed' class
            for (let j = 0; j < _projectList.children.length; j++){
                _projectList.children[j].classList.remove('pressed');
            }
            _projectList.children[i].classList.add('pressed');

            // clear the main panel
            while(todoList.firstChild){todoList.firstChild.remove()};

            // If this project already has To-Dos in it, then create item DOM
            if (project[currentProject]){
                
                for (let eachTodo = 0; eachTodo < project[currentProject].length; eachTodo++){
                    if (project[currentProject][eachTodo]){
                        createDOM.item(project[currentProject][eachTodo], project, currentProject, eachTodo);
                    }
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
    projectButton();
});

// Create ToDo Item Submit Button
const itemSubmit = document.querySelector('.itemSubmit');
itemSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // submit new todo to project
    let todo = todoItem(document.querySelector('.title').value, document.querySelector('.description').value, currentProject, "incomplete")

    if (project[currentProject]){
        project[currentProject].push(todo);
    } else {
        project[currentProject]=[];
        project[currentProject].push(todo);
    }
    //create DOM and behavior
    createDOM.item(todo, project, currentProject, project[currentProject].length-1);
});

// Edit Project Button
document.querySelector('.projectEditSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    projectList[currentProject] = document.querySelector('.projectEditInput').value;
    createDOM.projectEdit(projectList, currentProject);

    projectButton();
});

// Delete Project Button
const deleteProject = document.querySelector('.deleteProject');
deleteProject.addEventListener('click', () => {
    // Remove DOM
    const _projectList = document.querySelector('.projectList');
    _projectList.removeChild(document.querySelector(`.projects${currentProject}`));

    // Remove object from projectList array
    // projectList.splice(currentProject,1);
    projectList[currentProject] = '';

    // Remove object from todoList
    // project.splice(currentProject,1);
    project[currentProject] = '';

    // clear the main panel
    while(todoList.firstChild){todoList.firstChild.remove()};

    projectButton();
});

// Edit Item Button
const itemEditSubmit = document.querySelector('.itemEditSubmit');
itemEditSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    project[currentProject][currentItem].title = document.querySelector('.titleEdit').value;
    project[currentProject][currentItem].description = document.querySelector('.descriptionEdit').value;

    // clear the main panel
    while(todoList.firstChild){todoList.firstChild.remove()};    

    for (let eachTodo = 0; eachTodo < project[currentProject].length; eachTodo++){
        if (project[currentProject][eachTodo]){
            createDOM.item(project[currentProject][eachTodo], project, currentProject, eachTodo);
        }
    }

    popupClose.itemEdit();

});

export{
    projectButton,
    projectCounter,
};