import { format } from 'date-fns';
import { projectButton, projectCounter, saveToLocalStorage } from './index.js';
// import {saveToLocalStorage} from './localStorage';

function initDOM() {
  // Create Project Button
  const createProject = document.querySelector('.createProject');
  createProject.addEventListener('click', () => {
    popupOpen.project();
  });

  const projectCancel = document.querySelector('.projectCancel');
  projectCancel.addEventListener('click', (e) => {
    e.preventDefault();
    popupClose.project();
  });

  // Edit Project Button
  const editProject = document.querySelector('.editProject');
  editProject.addEventListener('click', () => {
    popupOpen.projectEdit();
  });

  const projectEditCancel = document.querySelector('.projectEditCancel');
  projectEditCancel.addEventListener('click', (e) => {
    e.preventDefault();
    popupClose.projectEdit();
  });

  // Create To-Do Button
  const createTodo = document.querySelector('.createTodo');
  createTodo.addEventListener('click', () => {
    popupOpen.item();
  });

  const itemCancel = document.querySelector('.itemCancel');
  itemCancel.addEventListener('click', (e) => {
    e.preventDefault();
    popupClose.item();
  });

  // Edit To-Do Button
  const todoEditCancel = document.querySelector('.itemEditCancel');
  todoEditCancel.addEventListener('click', (e) => {
    e.preventDefault();
    popupClose.itemEdit();
  });
}

const popupOpen = (() => {
  const project = () => {
    document.querySelector('.projectPopup').style.display = 'block';
    document.querySelector('.createProject').style.display = 'none';
    document.querySelector('.editProject').style.display = 'none';
    document.querySelector('.deleteProject').style.display = 'none';
  };

  const projectEdit = () => {
    document.querySelector('.projectEditPopup').style.display = 'block';
    document.querySelector('.createProject').style.display = 'none';
    document.querySelector('.editProject').style.display = 'none';
    document.querySelector('.deleteProject').style.display = 'none';
  };

  const item = () => {
    document.querySelector('.itemPopup').style.display = 'block';
    document.querySelector('.createTodo').style.display = 'none';
  };

  const itemEdit = () => {
    document.querySelector('.itemEditPopup').style.display = 'block';
  };

  return {
    project,
    projectEdit,
    item,
    itemEdit,
  };
})();

const popupClose = (() => {
  const project = () => {
    document.querySelector('.projectPopup').style.display = 'none';
    document.querySelector('.projectForm').reset();
    document.querySelector('.createProject').style.display = 'block';
    document.querySelector('.editProject').style.display = 'block';
    document.querySelector('.deleteProject').style.display = 'block';
  };

  const projectEdit = () => {
    document.querySelector('.projectEditPopup').style.display = 'none';
    document.querySelector('.projectEditForm').reset();
    document.querySelector('.createProject').style.display = 'block';
    document.querySelector('.editProject').style.display = 'block';
    document.querySelector('.deleteProject').style.display = 'block';
  };

  const item = () => {
    document.querySelector('.itemPopup').style.display = 'none';
    document.querySelector('.itemForm').reset();
    document.querySelector('.createTodo').style.display = 'block';
  };

  const itemEdit = () => {
    document.querySelector('.itemEditPopup').style.display = 'none';
    document.querySelector('.itemEditForm').reset();
    document.querySelector('.createTodo').style.display = 'block';
  };

  return {
    project,
    projectEdit,
    item,
    itemEdit,
  };
})();

let currentItem;
const createDOM = (() => {
  const projectInit = (_projectList) => {
    const projectList = document.querySelector('.projectList');
    for (let i = 0; i < _projectList.length; i++) {
      const projects = document.createElement('button');
      projects.textContent = _projectList[i];
      projects.classList.add('project');
      projects.classList.add(`projects${i}`);
      projectList.appendChild(projects);
    }
  };

  const project = (_projectList) => {
    const projectList = document.querySelector('.projectList');
    const eachProject = _projectList.length - 1;
    const projects = document.createElement('button');
    projects.textContent = _projectList[eachProject];
    projects.classList.add('project');
    projects.classList.add(`projects${projectCounter}`);
    projectList.appendChild(projects);
    popupClose.project();
  };

  const projectEdit = (_projectList, _currentProject) => {
    document.querySelector(
      `.projects${_currentProject}`,
    ).textContent = `${_projectList[_currentProject]}`;
    popupClose.projectEdit();
  };

  const item = (_todo, _project, _nthProject, _nthItem) => {
    const todoList = document.querySelector('.todoList');
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');
    todoList.appendChild(todoContainer);

    // Todo Title
    const todoButton = document.createElement('button');
    todoButton.textContent = _todo.title;
    todoButton.classList.add('todoItems');
    todoButton.style.cssText = _todo.status == 'complete'
      ? 'text-decoration: line-through;'
      : 'text-decoration: none;';
    todoButton.addEventListener('click', () => {
      // project Status
      _todo.status = _todo.status == 'complete' ? 'incomplete' : 'complete';
      // CSS - Line Through
      todoButton.style.cssText = _todo.status == 'complete'
        ? 'text-decoration: line-through;'
        : 'text-decoration: none;';

      saveToLocalStorage();
    });
    todoContainer.appendChild(todoButton);

    // Todo Info
    const todoInfoButton = document.createElement('button');
    todoInfoButton.classList.add('todoInfoButton');
    todoInfoButton.textContent = 'i';
    todoInfoButton.addEventListener('click', () => {
      document.querySelector('.infoPopup').style.display = 'block';
      const titleInfo = document.querySelector('.titleInfo');
      const descriptionInfo = document.querySelector('.descriptionInfo');
      const statusInfo = document.querySelector('.statusInfo');
      const priorityInfo = document.querySelector('.priorityInfo');
      const dueDateInfo = document.querySelector('.dueDateInfo');

      // date-fns
      titleInfo.textContent = _todo.title;
      descriptionInfo.textContent = _todo.description;
      priorityInfo.textContent = `Priority: ${_todo.priority}`;
      if (_todo.dueDate) {
        dueDateInfo.textContent = format(
          new Date(_todo.dueDate.replace(/-/g, '/')),
          'MMMM dd, yyyy',
        );
      }
      statusInfo.textContent = _todo.status;

      const closeButton = document.querySelector('.closeButton');
      closeButton.addEventListener('click', () => {
        document.querySelector('.infoPopup').style.display = 'none';
      });
    });
    todoContainer.appendChild(todoInfoButton);

    // Todo Edit
    const todoEditButton = document.createElement('button');
    todoEditButton.classList.add('todoEditButton');
    todoEditButton.textContent = 'Edit';
    todoEditButton.addEventListener('click', () => {
      popupOpen.itemEdit();
      currentItem = _nthItem;
    });
    todoContainer.appendChild(todoEditButton);

    // Todo Delete
    const todoDeleteButton = document.createElement('button');
    todoDeleteButton.classList.add('todoDeleteButton');
    todoDeleteButton.textContent = 'X';
    todoDeleteButton.addEventListener('click', () => {
      // remove DOM
      todoList.removeChild(todoContainer);
      // remove object from array
      _project[_nthProject][_nthItem] = '';
      saveToLocalStorage();
      // render main panel
      projectButton();
    });
    todoContainer.appendChild(todoDeleteButton);

    popupClose.item();
  };

  return {
    projectInit,
    project,
    projectEdit,
    item,
  };
})();

export {
  initDOM, popupOpen, popupClose, currentItem, createDOM,
};
