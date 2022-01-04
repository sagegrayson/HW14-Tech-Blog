const sequelize = require("../config/connection");
const UserToSeed = require("./users.js");
const PostToSeed = require("./posts.js");

const seed = async () => {
	await sequelize.sync({ force: true });

	await UserToSeed();

	await PostToSeed();

	process.exit(0);
};

seed();
