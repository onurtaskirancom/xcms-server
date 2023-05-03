import Tag from "../models/tag";
import Post from "../models/post";
import slugify from "slugify";

export const create = async (req, res) => {
  try {
    const { name } = req.body;
    const tag = await new Tag({
      name,
      slug: slugify(name),
    }).save();
    // console.log("saved category", category);
    res.json(tag);
  } catch (error) {
    console.log(err);
  }
};

export const tags = async (req, res) => {
  try {
    const tags = await Tag.find().sort({ createdAt: -1 });
    res.json(tags);
  } catch (err) {
    console.log(err);
  }
};

export const removeTag = async (req, res) => {
  try {
    const { slug } = req.params;
    const tag = await Tag.findOneAndDelete({ slug });
    res.json(tag);
  } catch (err) {
    console.log(err);
  }
};

export const updateTag = async (req, res) => {
  try {
    const { slug } = req.params;
    const { name } = req.body;
    const tag = await Tag.findOneAndUpdate(
      { slug },
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(tag);
  } catch (err) {
    console.log(err);
  }
};

export const postsByTag = async (req, res) => {
  try {
    const { slug } = req.params;
    const tag = await Tag.findOne({ slug });

    const posts = await Post.find({ tags: tag._id })
      .populate('featuredImage postedBy')
      .sort({ createdAt: -1 });
    // .limit(20);

    res.json({ posts, tag });
  } catch (err) {
    console.log(err);
  }
};
