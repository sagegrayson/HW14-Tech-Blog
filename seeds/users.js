const { User } = require("../models");

const userData = [
	{
		username: "sagegrayson",
		email: "skaseyg@gmail.com",
		password: "password",
	},
];

const UserToSeed = () => User.bulkCreate(userData);

module.exports = UserToSeed;
