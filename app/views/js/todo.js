const addBtn = document.getElementById("add-todo");
const checkDoneBtnArr = document.querySelectorAll("#done-check");

const addTodoItem = () => {
    const todoItem = document.getElementById("todo-item");
    if(todoItem.value === ""){
        alert("Please enter a todo item");
    }
    else {
        axios.post("/", {
            text: todoItem.value,
            isDone: false
        }).then( (response) => {
            todoItem.value = "";
        });
    }
}

addBtn.addEventListener("click", () => {
    addTodoItem();
});