let add = document.querySelector("#add");
let newTask = document.querySelector(".task");
let eachTask = newTask.value;
let eachTaskContainer = document.querySelector(".eachTaskContainer");
let taskContainer = document.querySelector("#taskContainer");

add.addEventListener("click", () => {
        let input = document.createElement('input');
        input.classList.add('task');
        eachTaskContainer.append(input);
        input.innerText = eachTask;
        newTask.value = "";
        let butDelete = document.createElement('img');
        butDelete.src = "img/cross.png";
        butDelete.classList.add("delete");
        eachTaskContainer.append(butDelete);

        butDelete.addEventListener("click", () => {
            input.remove();
            butDelete.remove();
        })
    })

// sorting

let sortingButton = document.querySelector('#sorting');
let pointer = true;
let tasks = document.querySelectorAll("#task")
let taskArray = [...tasks];

sortingButton.addEventListener("click", () => {
    if (pointer === true) {
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
    sortingButton.src = "img/down.png";
    pointer = false;
    } else if (pointer === false) {
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
    sortingButton.src = "img/up.png";
    pointer = true;
    }
    tasksArray.forEach(curName => {
        taskContainer.append(curName);
    });
})