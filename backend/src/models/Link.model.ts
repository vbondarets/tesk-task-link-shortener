import mongoose from "mongoose";

const Schema = mongoose.Schema;

const linkSchema = new Schema({
  oldLink: {
    type: String,
    required: true,
  },
  newLink: {
    type: String,
    required: true,
    unique: true
  },
},{ timestamps: true });

export const Link = mongoose.model('Link', linkSchema);