import mongoose from "mongoose";
const { Schema } = mongoose;

const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tag", tagSchema);
