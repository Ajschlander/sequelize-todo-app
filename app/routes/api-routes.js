
const db = require("../models");
module.exports = function (app) {

    // GET route for getting all of the todos
    app.get("/api/todos", (req, res) => {
        db.Todo.findAll({}).then(function (dbTodo) {
            res.json(dbTodo);
        });
    });

    // POST route for saving a new todo
    app.post("/api/todos", (req, res) => {
        console.log(req.body);
        db.Todo.create({
            text: req.body.text,
            isDone: req.body.isDone
        }).then( (dbTodo) => {
            res.json(dbTodo);
        });
    });

    // DELETE route for deleting todos
    app.delete("/api/todos/:id", (req, res) => {
        db.Todo.destroy({
            where: {
                id: req.params.id
            },
        }).then( (dbTodo) => {
            res.json(dbTodo);
        });
    });

    // PUT route for updating todos
    app.put("/api/todos", (req, res) => {
        db.Todo.update({
            text: req.body.text,
            isDone: req.body.isDone
        }, {
            where: {
                id: req.body.id
            },
        }).then( (dbTodo) => {
            res.json(dbTodo);
        });
    });
};