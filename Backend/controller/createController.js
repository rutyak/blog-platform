const Post = require("../model/postSchema");

const createController = async (req, res) => {
  const { title, content, authorId } = req.body;

  console.log("data: ",title, content, authorId);

  try {
    const newPost = await Post.create({ title, content, authorId });
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ message: "Failed to create post." });
  }
};

module.exports = createController;
