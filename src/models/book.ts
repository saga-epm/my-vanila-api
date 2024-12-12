import mongoose, { Schema, Document } from 'mongoose';

interface IBook extends Document {
    title: string;
    author: string;
}

const bookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});

export default mongoose.model<IBook>('Book', bookSchema);