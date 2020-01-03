module.exports = function (sequelize, DataTypes) {
    const Todo = sequelize.define("Todo", {
        text: DataTypes.STRING,
        isDone: DataTypes.BOOLEAN
    });
    return Todo;
};