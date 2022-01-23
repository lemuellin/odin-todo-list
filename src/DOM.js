function initDOM(){
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.textContent = "To-Do List";
    header.classList.add('header');
    content.appendChild(header);

    const dashboard = document.createElement('div');
    dashboard.classList.add('dashboard');
    content.appendChild(dashboard);

        const sidePanel = document.createElement('div');
        sidePanel.classList.add('sidePanel');
        dashboard.appendChild(sidePanel);

            const projectTitle = document.createElement('div');
            projectTitle.textContent = 'Projects';
            sidePanel.appendChild(projectTitle);

            const projectList = document.createElement('div');
            projectList.classList.add('projectList');
            sidePanel.appendChild(projectList);

            const createProject = document.createElement('button');
            createProject.classList.add('createProject');
            createProject.textContent = 'Create Project';
            createProject.addEventListener('click', () => {popupOpen.project()});
            sidePanel.appendChild(createProject);

        const mainPanel = document.createElement('div');
        mainPanel.classList.add('mainPanel');
        dashboard.appendChild(mainPanel);

            const todoTitle = document.createElement('div');
            todoTitle.textContent = 'To-Do Items';
            mainPanel.appendChild(todoTitle);

            const todoList = document.createElement('div');
            todoList.classList.add('todoList');
            mainPanel.appendChild(todoList);

            const createTodo = document.createElement('button');
            createTodo.classList.add('createTodo');
            createTodo.textContent = 'Create To-Do';
            createTodo.addEventListener('click', ()=>{popupOpen.item()});
            mainPanel.appendChild(createTodo);
    
    const projectPopup = document.createElement('div');
    projectPopup.classList.add('projectPopup');
    document.body.appendChild(projectPopup);
    
        const projectForm = document.createElement('form');
        projectForm.classList.add('projectForm');
        projectPopup.appendChild(projectForm);

            const projectInput = document.createElement('input');
            projectInput.type = "text";
            projectInput.placeholder = "Enter Project Name";
            projectInput.name = "project";
            projectInput.classList.add('projectInput');
            projectForm.appendChild(projectInput);

            const projectSubmit = document.createElement('button');
            projectSubmit.textContent = "Submit";
            projectSubmit.classList.add('projectSubmit');
            projectForm.appendChild(projectSubmit);
            
            const projectCancel = document.createElement('button');
            projectCancel.textContent = "Cancel";
            projectCancel.classList.add('projectCancel');
            projectCancel.addEventListener('click', (e)=>{
                e.preventDefault();
                popupClose.project();
            });
            projectForm.appendChild(projectCancel);

    const itemPopup = document.createElement('div');
    itemPopup.classList.add('itemPopup');
    document.body.appendChild(itemPopup);
    
        const itemForm = document.createElement('form');
        itemForm.classList.add('itemForm');
        itemPopup.appendChild(itemForm);

            const itemInputTitle = document.createElement('input');
            itemInputTitle.type = "text";
            itemInputTitle.placeholder = "Enter Title";
            itemInputTitle.name = "title";
            itemInputTitle.classList.add('title');
            itemForm.appendChild(itemInputTitle);

            const itemInputDescription = document.createElement('input');
            itemInputDescription.type = "text";
            itemInputDescription.placeholder = "Enter Description";
            itemInputDescription.name = "description";
            itemInputDescription.classList.add('description');
            itemForm.appendChild(itemInputDescription);

            const itemSubmit = document.createElement('button');
            itemSubmit.textContent = "Submit";
            itemSubmit.classList.add('itemSubmit');
            itemForm.appendChild(itemSubmit);

            const itemCancel = document.createElement('button');
            itemCancel.textContent = "Cancel";
            itemCancel.classList.add('itemCancel');
            itemCancel.addEventListener('click', (e) => {
                e.preventDefault();
                popupClose.item();
            });
            itemForm.appendChild(itemCancel);
}

const popupOpen = (() => {
    const project = () => {
      document.querySelector('.projectPopup').style.display = 'block';
    }

    const item = () => {
      document.querySelector('.itemPopup').style.display = 'block';
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
    }

    const item = () => {
      document.querySelector('.itemPopup').style.display = 'none';
      document.querySelector('.itemForm').reset();
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
            let projects = document.createElement('button');
            projects.textContent = _projectList[eachProject];
            projects.classList.add('project');
            projects.classList.add(`projects${eachProject}`);
            projects.addEventListener('click', () => {

            });
            projectList.appendChild(projects);

        popupClose.project();
    }

    const item = (todo) => {
        const todoList = document.querySelector('.todoList');
        let todoButton = document.createElement('button');
        todoButton.textContent = todo.title;
        todoButton.classList.add('todoItems');
        todoButton.style.cssText = (todo.status == "complete") ? "text-decoration: line-through;" : "text-decoration: none;";
        todoButton.addEventListener('click', () => {
            // sortedProject Status
            todo.status = (todo.status == "complete") ? "incomplete" : "complete";
            // CSS - Line Through
            todoButton.style.cssText = (todo.status == "complete") ? "text-decoration: line-through;" : "text-decoration: none;";
        });
        todoList.appendChild(todoButton);
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