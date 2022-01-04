const router = require("express").Router();

const userRoutes = require("./user");
const postRoutes = require("./post");

//api/users
router.use("/users", userRoutes);
//api/posts
router.use("/posts", postRoutes);

module.exports = router;
