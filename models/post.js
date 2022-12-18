import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;


const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {},
    categories: [{ type: ObjectId, ref: "Category" }],
    tags: [{ type: ObjectId, ref: "Tag" }],
    published: { type: Boolean, default: true },
    postedBy: { type: ObjectId, ref: "User" },
    featuredImage: { type: ObjectId, ref: "Media" },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
