let taskContainer = document.querySelector("#taskContainer");

function download() {
  let newEachTaskContainer = document.createElement("div");
  newEachTaskContainer.classList.add("eachTaskContainer");
  let input = document.createElement("input");
  input.classList.add("task");
  newEachTaskContainer.append(input);
  let butDelete = document.createElement("img");
  butDelete.src = "img/cross.png";
  butDelete.classList.add("delete");
  newEachTaskContainer.append(butDelete);

  taskContainer.append(newEachTaskContainer);

  butDelete.addEventListener("click", () => {
    input.remove();
    butDelete.remove();
  });
}

download();

let add = document.querySelector("#add");

add.addEventListener("click", download);

// sorting
let sortingButton = document.querySelector("#sorting");
let pointer = true;

sortingButton.addEventListener("click", () => {
  let tasks = document.querySelectorAll(".eachTaskContainer");
  let taskArray = [...tasks];
  console.log(taskArray);
  
  if (pointer === true) {
    taskArray.sort((first, second) => {
      let pam1 = first.querySelector("input").value;
      let pam2 = second.querySelector("input").value;
      if (pam1 > pam2) {
        return 1;
      } else if (pam1 < pam2) {
        return -1;
      } else {
        return 0;
      }
    });
    sortingButton.src = "img/up.png";
    pointer = false;
  } else if (pointer === false) {
    taskArray.sort((first, second) => {
      let pam1 = first.querySelector("input").value;
      let pam2 = second.querySelector("input").value;
      if (pam1 > pam2) {
        return -1;
      } else if (pam1 < pam2) {
        return 1;
      } else {
        return 0;
      }
    });
    sortingButton.src = "img/down.png";
    pointer = true;
  }
  taskArray.forEach((curName) => {
    taskContainer.append(curName);
  });
});
