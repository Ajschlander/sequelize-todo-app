
const   express     = require("express"),
        db          = require("./app/models"),
        app         = express(),
        PORT        = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("./app/views"));

app.set("views", "./app/views");
app.set("view engine", "ejs");

require("./app/routes/api-routes")(app);

db.sequelize.sync().then(function () {

    app.listen(PORT, function () {
        console.log("App listening on PORT: " + PORT);
    });

});

