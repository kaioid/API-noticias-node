import * as mongoose from 'mongoose';
import newsSchema, { INews } from '../models/newsSchema';

const NewsModel = mongoose.model<INews>('news', newsSchema);

export default NewsModel;
