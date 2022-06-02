const express = require("express");
const session = require("express-session");
const path = require("path");
const hbs = require("hbs");
const fileupload = require("express-fileupload");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

const routerIndex = require("./routes/index");
const routerLogin = require("./routes/login");
const routerContacto = require("./routes/contacto");
const routerSecret = require("./routes/secret");
const routerTienda = require("./routes/tienda");
const routerStock = require ("./routes/stock")
const routerAgregador = require("./routes/admin");


const app = express();

app.use(
    fileupload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );
  

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true
    })
);

const secured = async (req, res, next) => {
    if(req.session.user){
        next();
    } else {
        const message = "Inicie sesión para poder acceder"
        res.render("login", {message});
    }
};

const login = (req, res, next) => {
    app.locals.loggeduser = req.session.user;
    next();
};



app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "./views/partials"));

app.use("/", login, routerIndex);
app.use("/login", routerLogin);
app.use("/contacto", routerContacto);
app.use("/secret", secured, routerSecret);
app.use("/stock", secured, routerStock);
app.use("/agregador", secured, routerAgregador);
app.use("/tienda", routerTienda);

app.listen(PORT, (err) => {
    err? console.log("Error del servidor")
    : console.log(`Servidor ejecutándose en http://localhost:${PORT}/`)
});