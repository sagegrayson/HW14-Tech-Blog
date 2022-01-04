const router = require("express").Router();
const { User, Post } = require("../models");
const auth = require("../utils/auth.js");

// landing
router.get("/", async (req, res) => {
	try {
		const dbPostData = await Post.findAll({
			include: [
				{
					model: User,
					attributes: ["username"],
				},
			],
		});
		const posts = dbPostData.map((post) => post.get({ plain: true }));

		res.render("home", {
			posts,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// create acc
router.get("/signup", async (req, res) => {
	try {
		res.render("signup", {
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// login -> main
router.get("/login", async (req, res) => {
	try {
		res.render("login", {
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// make post
router.get("/post", auth, async (req, res) => {
	res.render("post", {
		loggedIn: req.session.loggedIn,
	});
});
module.exports = router;
