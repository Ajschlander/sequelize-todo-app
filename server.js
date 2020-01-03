const   express         = require("express"),
        PORT            = process.env.PORT || 3000,
        methodOverride  = require("method-override"),
        bodyParser      = require("body-parser"),
        app             = express();


app.use(express.static("app/public"));

app.listen(PORT, () => {
    console.log("Server has started on port: " + PORT);
});

