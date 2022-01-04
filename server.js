const path = require("path");
const express = require("express");
const exsession = require("express-session");
const exhandle = require("express-handlebars");

const routes = require("./controllers");
// const helpers = require("./utils/helpers");
// ^14.28

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const session = {
	secret: "secretsauce",
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

app.use(exsession(session));

const hbs = exhandle.create({ defaultLayout: "main" });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening on " + PORT));
});
