const addBtn = document.getElementById("add-todo");

const addTodoItem = () => {
    const todoItem = document.getElementById("todo-item");
    if(todoItem.value === ""){
        alert("Please enter a todo item");
    }
    else {
        axios.post("/api/todos", {
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

const getTodos = async () => {
    try {
        let res = await axios.get("/api/todos");
        let todos = res.data;
        return todos;
    }
    catch(err){
        console.log(err);
    }
}

const updatePage = () => {
    
}