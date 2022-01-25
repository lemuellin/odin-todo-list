import {projectButton, projectCounter} from './index.js';

function initDOM(){
    const createProject = document.querySelector('.createProject');
    createProject.addEventListener('click', () => {popupOpen.project()});

    const projectCancel = document.querySelector('.projectCancel');
    projectCancel.addEventListener('click', (e)=>{
        e.preventDefault();
        popupClose.project();
    });

    const createTodo = document.querySelector('.createTodo');
    createTodo.addEventListener('click', ()=>{popupOpen.item()});

    const itemCancel = document.querySelector('.itemCancel');
    itemCancel.addEventListener('click', (e) => {
        e.preventDefault();
        popupClose.item();
    });
}

const popupOpen = (() => {
    const project = () => {
      document.querySelector('.projectPopup').style.display = 'block';
      document.querySelector('.createProject').style.display = 'none';
    }

    const item = () => {
      document.querySelector('.itemPopup').style.display = 'block';
      document.querySelector('.createTodo').style.display = 'none';
    }

    return {
        project,
        item,
    };
})();

const popupClose = (() => {
    const project = () => {
      document.querySelector('.projectPopup').style.display = 'none';
      document.querySelector('.projectForm').reset();
      document.querySelector('.createProject').style.display = 'block';
    }

    const item = () => {
      document.querySelector('.itemPopup').style.display = 'none';
      document.querySelector('.itemForm').reset();
      document.querySelector('.createTodo').style.display = 'block';
    }

    return {
        project,
        item,
    };
})();

const createDOM = (() => {
    const project = (_projectList) => {
        const projectList = document.querySelector('.projectList');
        let eachProject = _projectList.length - 1;
            const projects = document.createElement('button');
            projects.textContent = _projectList[eachProject];
            projects.classList.add('project');
            projects.classList.add(`projects${projectCounter}`);
            projects.addEventListener('click', () => {

            });
            projectList.appendChild(projects);

        popupClose.project();
    }

    const item = (todo, sortedProject, nthProject, nthItem) => {
        const todoList = document.querySelector('.todoList');
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todoContainer');
        todoList.appendChild(todoContainer);

        //Todo Title
        const todoButton = document.createElement('button');
        todoButton.textContent = todo.title;
        todoButton.classList.add('todoItems');
        todoButton.style.cssText = (todo.status == "complete") ? "text-decoration: line-through;" : "text-decoration: none;";
        todoButton.addEventListener('click', () => {
            // sortedProject Status
            todo.status = (todo.status == "complete") ? "incomplete" : "complete";
            // CSS - Line Through
            todoButton.style.cssText = (todo.status == "complete") ? "text-decoration: line-through;" : "text-decoration: none;";
        });
        todoContainer.appendChild(todoButton);

        //Todo Edit
        const todoEditButton = document.createElement('button');
        todoEditButton.classList.add('todoEditButton');
        todoEditButton.textContent = "Edit";
        todoEditButton.addEventListener('click', () => {
            popupOpen.item();

        });
        todoContainer.appendChild(todoEditButton);

        //Todo Delete
        const todoDeleteButton = document.createElement('button');
        todoDeleteButton.classList.add('todoDeleteButton');
        todoDeleteButton.textContent = "Delete";
        todoDeleteButton.addEventListener('click', () => {
            //remove DOM
            todoList.removeChild(todoContainer);
            //remove object from array
            sortedProject[nthProject].splice(nthItem,1);
            //render main panel
            projectButton();
        });
        todoContainer.appendChild(todoDeleteButton);

        //Todo Info
        const todoInfoButton = document.createElement('button');
        todoInfoButton.classList.add('todoInfoButton');
        todoInfoButton.textContent = "i";
        todoContainer.appendChild(todoInfoButton);

        popupClose.item();
    }

    return {
        project,
        item,
    }
})();


export{
    initDOM,
    createDOM,
};


// create Item drop down a list of project

    // DOM
    // const itemInputProjectDropDown = document.createElement('select');
    // itemInputProjectDropDown.classList.add('itemInputProjectDropDown');
    // itemInputProjectDropDown.name = "projectDropDown";
    // itemForm.appendChild(itemInputProjectDropDown);

    //   const projectList = document.querySelector('.projectList');
    //   const itemInputProjectDropDown = document.querySelector('itemInputProjectDropDown');
    //   for (let i = 0; i < projectList.length; i++){
    //         i = document.createElement('option');
    //         console.log('123');
    //         i.value = projectList[i];
    //         itemInputProjectDropDown.appendChild(i);
    //     }