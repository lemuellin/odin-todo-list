import {
  initDOM, currentItem, createDOM, popupClose,
} from './DOM.js';
// import {saveToLocalStorage, readLocalStorage} from './localStorage';
import './style.css';

// Variables
let project; // sorted all todos based on project#
let projectList; // all project names goes here
let projectCounter;
let currentProject;
// localStorage.clear();

// Todo Item Factory
const todoItem = (title, description, project, status, dueDate, priority) => {
  const completeToggle = () => {
    status = status == 'complete' ? 'incomplete' : 'complete';
  };
  return {
    title,
    description,
    project,
    status,
    dueDate,
    priority,
    completeToggle,
  };
};

// Create Project Algor
function createProjectAlgor(_name, projectList) {
  projectList.push(_name);
  createDOM.project(projectList);
  projectCounter++;
}

// localStorage
function saveToLocalStorage() {
  localStorage.setItem('project', JSON.stringify(project));
  localStorage.setItem('projectList', JSON.stringify(projectList));
  localStorage.setItem('projectCounter', JSON.stringify(projectCounter));
}

function readLocalStorage() {
  project = JSON.parse(localStorage.getItem('project'));
  projectList = JSON.parse(localStorage.getItem('projectList'));
  projectCounter = JSON.parse(localStorage.getItem('projectCounter'));

  return project, projectList, projectCounter;
}

if (localStorage.getItem('projectList')) {
  console.log(projectList);
  readLocalStorage();
  console.log(projectList);
  createDOM.projectInit(projectList);
  console.log(localStorage.getItem('project'));
} else {
  init();
}

initDOM();

// #region Initialization - create Default Projects and Todo Items
function init() {
  // Variables
  project = []; // sorted all todos based on project#
  projectList = []; // all project names goes here
  projectCounter = 0;

  const projectInit = [];

  createProjectAlgor('Inbox', projectList);
  projectInit.push(
    todoItem(
      'Buy birthday present for Tiffany',
      'maybe just get an e-giftcard',
      '0',
      'incomplete',
      '2020-01-01',
      'High',
    ),
  );
  projectInit.push(
    todoItem(
      'Water the plants',
      'talk to the plants, make sure they are happy',
      '0',
      'incomplete',
      '2020-01-01',
      'Medium',
    ),
  );
  projectInit.push(
    todoItem(
      'Car maintenance',
      'fix the broken window',
      '0',
      'incomplete',
      '2020-01-01',
      'Low',
    ),
  );

  createProjectAlgor('Work', projectList);
  projectInit.push(
    todoItem(
      'Meeting with Derek the manager',
      'Prepare presentation and coffee',
      '1',
      'incomplete',
      '2020-01-01',
      'High',
    ),
  );
  projectInit.push(
    todoItem(
      'Call Todd from X Company',
      'Discuss about which pizza flavor is the best',
      '1',
      'incomplete',
      '2020-01-01',
      'High',
    ),
  );

  createProjectAlgor('Hobbies', projectList);
  projectInit.push(
    todoItem(
      'Disc golf with Dalton',
      'La Mirada Park',
      '2',
      'incomplete',
      '2020-01-01',
      'Medium',
    ),
  );
  projectInit.push(
    todoItem(
      'Workout at the gym',
      'so that I can have more burgers',
      '2',
      'incomplete',
      '2020-01-01',
      'Low',
    ),
  );
  projectInit.push(
    todoItem(
      'Browse Amazon for Harry Potter Wands',
      'get the Elder Wand',
      '2',
      'incomplete',
      '2020-01-01',
      'High',
    ),
  );
  projectInit.push(
    todoItem(
      'Watch another Godzilla movie',
      'popcorn and coke',
      '2',
      'incomplete',
      '2020-01-01',
      'High',
    ),
  );

  // Sort todos based on project#: go through projectList and filter the todos
  for (let i = 0; i < projectList.length; i++) {
    project[i] = projectInit.filter((todo) => todo.project == `${i}`);
  }
  return project, projectList, currentProject, projectCounter;
}
// #endregion

// Project Button Behavior
const todoList = document.querySelector('.todoList');
function projectButton() {
  const _projectList = document.querySelector('.projectList');
  // Loop through nodes of parent
  for (let i = 0; i < _projectList.children.length; i++) {
    _projectList.children[i].addEventListener('click', () => {
      // Update variable - currentProject
      _projectList.children[i].classList.remove('project');
      currentProject = _projectList.children[i].classList[0].slice(8);
      _projectList.children[i].classList.add('project');

      // Add/Rmv 'pressed' class
      for (let j = 0; j < _projectList.children.length; j++) {
        _projectList.children[j].classList.remove('pressed');
      }
      _projectList.children[i].classList.add('pressed');

      // clear the main panel
      while (todoList.firstChild) {
        todoList.firstChild.remove();
      }

      // If this project already has To-Dos in it, then create item DOM
      if (project[currentProject]) {
        for (
          let eachTodo = 0;
          eachTodo < project[currentProject].length;
          eachTodo++
        ) {
          if (project[currentProject][eachTodo]) {
            createDOM.item(
              project[currentProject][eachTodo],
              project,
              currentProject,
              eachTodo,
            );
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
  createProjectAlgor(
    document.querySelector('.projectInput').value,
    projectList,
  );
  saveToLocalStorage();
  projectButton();
});

// Create ToDo Item Submit Button
const itemSubmit = document.querySelector('.itemSubmit');
itemSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  // submit new todo to project
  const todo = todoItem(
    document.querySelector('.title').value,
    document.querySelector('.description').value,
    currentProject,
    'incomplete',
    document.querySelector('.dueDate').value,
    document.querySelector('.priority').value,
  );

  if (project[currentProject]) {
    project[currentProject].push(todo);
  } else {
    project[currentProject] = [];
    project[currentProject].push(todo);
  }
  // create DOM and behavior
  createDOM.item(
    todo,
    project,
    currentProject,
    project[currentProject].length - 1,
  );
  saveToLocalStorage();
});

// Edit Project Button
document.querySelector('.projectEditSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  projectList[currentProject] = document.querySelector('.projectEditInput').value;
  createDOM.projectEdit(projectList, currentProject);
  saveToLocalStorage();
  projectButton();
});

// Delete Project Button
const deleteProject = document.querySelector('.deleteProject');
deleteProject.addEventListener('click', () => {
  // Remove DOM
  const _projectList = document.querySelector('.projectList');
  _projectList.removeChild(
    document.querySelector(`.projects${currentProject}`),
  );

  // Remove object from projectList array
  // projectList.splice(currentProject,1);
  projectList[currentProject] = '';

  // Remove object from todoList
  // project.splice(currentProject,1);
  project[currentProject] = '';

  // clear the main panel
  while (todoList.firstChild) {
    todoList.firstChild.remove();
  }

  saveToLocalStorage();
  projectButton();
});

// Edit Item Button
const itemEditSubmit = document.querySelector('.itemEditSubmit');
itemEditSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  project[currentProject][currentItem].title = document.querySelector('.titleEdit').value;
  project[currentProject][currentItem].description = document.querySelector('.descriptionEdit').value;
  project[currentProject][currentItem].dueDate = document.querySelector('.dueDateEdit').value;
  project[currentProject][currentItem].priority = document.querySelector('.priorityEdit').value;
  // clear the main panel
  while (todoList.firstChild) {
    todoList.firstChild.remove();
  }

  for (
    let eachTodo = 0;
    eachTodo < project[currentProject].length;
    eachTodo++
  ) {
    if (project[currentProject][eachTodo]) {
      createDOM.item(
        project[currentProject][eachTodo],
        project,
        currentProject,
        eachTodo,
      );
    }
  }

  saveToLocalStorage();
  popupClose.itemEdit();
});

export { projectButton, projectCounter, saveToLocalStorage };
