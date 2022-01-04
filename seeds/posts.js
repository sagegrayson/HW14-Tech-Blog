const { Post } = require("../models");

const postData = [
	{
		post_text:
			"Did you know that the longest recorded flight of a chicken is thirteen seconds?",
		user_id: 1,
	},
];

const PostToSeed = () => Post.bulkCreate(postData);

module.exports = PostToSeed;
