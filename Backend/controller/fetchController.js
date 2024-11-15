const Post = require("../model/postSchema");

const fetchController = async (req, res) => {
    try {
      const data = await Post.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

module.exports = fetchController;