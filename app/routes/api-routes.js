
const db = require("../models");
module.exports = function (app) {

    app.get("/", (req, res) => {
        db.Todo.findAll({where: {isDone: false}}).then(ndTodos => {
            db.Todo.findAll({where: {isDone: true}}).then(dTodos => {
                res.render("index", {notDoneTodos: ndTodos, doneTodos: dTodos});
            })
        })
    });

    app.post("/", (req, res) => {
        const todo = db.Todo.create({
            text: req.body.text,
            isDone: req.body.isDone
        });
    });

    
    
};