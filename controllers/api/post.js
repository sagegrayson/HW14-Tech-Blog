const router = require("express").Router();
const { Post, User } = require("../../models");

// /api/post
router.post("/post", async (req, res) => {
	try {
		const userData = await User.findOne({
			where: {
				username: req.body.user,
			},
		});
		const postData = await Post.create({
			post_text: req.body.postText,
			user_id: userData.id,
		});

		req.session.save(() => {
			req.session.loggedIn = true;

			res.status(200).json(postData);
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
