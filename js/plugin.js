// setting up important variables
let theInput = document.querySelector('.add-task input'),
    addButton = document.querySelector('.add-task span .add'),
    tasksWrapper = document.querySelector('.tasks-content'),
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

        let noTaskMessage = document.querySelector('.no-tasks-message');
        
        // check if span with no tasks message exist 
        if (document.body.contains(document.querySelector('.no-tasks-message'))) {
            
        // first , removing no tasks message
        noTaskMessage.remove();
        }
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
    
        // calculate tasks
        calculateTasks();
        
    }

});


// delete and finish buttons
document.addEventListener('click', function(e) {
    // delete task
    // selecting delete button by getting it's target
    if(e.target.className == 'delete') {
        
        // removing current task => the parent node is the span which contains delete button
        e.target.parentNode.remove();

        // check if the deleted task is the last one to run the function of the message 'no tasks to show'
        if (tasksWrapper.childElementCount == 0) {
            createNoTasks();
        }
    }

    // completing task
    if(e.target.classList.contains('task-box')) {
        e.target.classList.toggle('finished');
    }
    calculateTasks();
});

//  function to create no function message
function createNoTasks () {
    // creating message span
    let messageSpan = document.createElement('span');

    // creating text content
    let messageText = document.createTextNode("No Tasks to show");

    // add text to the span
    messageSpan.appendChild(messageText);

    // adding class to message span
    messageSpan.className = 'no-tasks-message';

    // append this span to task container
    tasksWrapper.appendChild(messageSpan);
}


// function to calculate tasks
function calculateTasks() { 
    // calculate all tasks whether it's completed or not
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // calculate completed tasks
    completedTasks.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}

