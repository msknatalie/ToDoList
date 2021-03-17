let add = document.querySelector("#add");
let newTask = document.querySelector(".task");
let eachTask = newTask.value;
let taskContainer = document.querySelector("#taskContainer");

add.addEventListener("click", () => {
        let input = document.createElement('input');
        input.classList.add('task');
        input.innerText = eachTask;
        taskContainer.append(input);
        newTask.value = "";
        return false;
    })

// sorting

let sortingButton = document.querySelector('#sorting');
sortingButton = true;
let tasks = document.querySelectorAll("#task")
let taskArray = [...tasks];

sortingButton.addEventListener("click", () => {
    if (sortingButton === true) {
    sortingButton = false;
    // надо поменять картинку на обратную
    taskArray.sort((first, second) => {
        let pam1 = first.querySelector('input').innerText;
        let pam2 = second.querySelector('input').innerText;
        if (pam1 > pam2) {
            return 1;
        } else if (pam1 < pam2) {
            return -1;
        } else {
            return 0;
        }
    })
    } else if (sortingButton === false) {
    sortingButton === true;
    tasksArray.sort((first, second) => {
        let pam1 = first.querySelector('input').innerText;
        let pam2 = second.querySelector('input').innerText;
        if (pam1 > pam2) {
            return - 1;
        } else if (pam1 < pam2) {
            return 1;
        } else {
            return 0;
        }
    })
    }
    tasksArray.forEach(curName => {
        taskContainer.append(curName);
    });
})