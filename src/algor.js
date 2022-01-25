import { createDOM } from './DOM.js';

// Todo Item Factory 
const todoItem = (title, description, project, status) => {
    // dueDate, priority
    return {title, description, project, status};
};

// Create Project Algor
function createProjectAlgor(_name, projectList){
    projectList.push(_name);
    createDOM.project(projectList);
}

export {
    todoItem,
    createProjectAlgor,
};