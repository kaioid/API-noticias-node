import * as mongoose from 'mongoose';

export interface INews extends mongoose.Document {
  hat?: string;
  tittle?: string;
  text?: string;
  author?: string;
  img?: string;
  publishDate?: string;
  link?: string;
  active?: boolean;
}

const newsSchema = new mongoose.Schema({
  hat: { type: String },
  tittle: { type: String },
  text: { type: String },
  author: { type: String },
  img: { type: String },
  publishDate: { type: String },
  link: { type: String },
  active: { type: Boolean },
});

export default newsSchema;
