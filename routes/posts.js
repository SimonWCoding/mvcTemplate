const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth } = require("../middleware/auth");

//Post Routes - Since linked from server js treat every path as:
// post/id:, post/createPost, post/likePost/:id, post/deletePost/:id
router.get("/:id", ensureAuth, postsController.getPost);

// enables users to upload images via Cloudinary
router.post("/createPost", upload.single("file"), postsController.createPost);

// enables users to like posts. In controller, uses POST model to update likes by one.
router.put("/likePost/:id", postsController.likePost);

// enables users to delete posts. In controller, uses POST model to delete post from Mongodb collection
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
