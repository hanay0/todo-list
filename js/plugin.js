// setting up important variables
let theInput = document.querySelector('.add-task input'),
    addButton = document.querySelector('.add-task span .add'),
    tasksWrapper = document.querySelector('.tasks-content'),
    noTaskMessage = document.querySelector('.no-tasks-message'),
    tasksCount = document.querySelector('.tasks-count span'),
    completedTasks = document.querySelector('.completed-count span');

// making focus on input field when the page is loading
window.onload = function () {
    theInput.focus();
};

// add task 
addButton.addEventListener('click', function() {
    let content = theInput.value;
    // if input feild is empty and has no content
    if(content === '') {
        swal("Oops!", "...You must add something about the task");
    } else {
        // first , removing no tasks message
        noTaskMessage.remove();
        // then , create span element
        let newTask = document.createElement('span');
        // create span's text
        let newTaskText = document.createTextNode(content);
        // create delete button inside this span
        let deleteButton = document.createElement('span');
        //create delete button text
        let deleteText = document.createTextNode('Delete');

        // adding text to span
        newTask.appendChild(newTaskText);
        // then adding class to it
        newTask.className = 'task-box';
        // adding texxt to delete button
        deleteButton.appendChild(deleteText);
        // then adding class to it
        deleteButton.className = 'delete';

        // add delete button to the new created span
        newTask.appendChild(deleteButton);

        // adding the task to the container
        tasksWrapper.appendChild(newTask);

        // clearing text input content after adding the task
        theInput.value = '';
        theInput.focus(); // repeating the focus again after adding the task
    }

});
