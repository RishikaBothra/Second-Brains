import mongoose from 'mongoose';
const contenttypes = ['article', 'video', 'podcast', 'book', 'other'];

const contentSchema = new mongoose.Schema({
    link: { type: String, required: true },
    type: { type: String,enum:contenttypes, required: true },
    title: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    tags: { type: [String], default: [] },
});

const addcontentmodel = mongoose.model('AddContent', contentSchema);
export default addcontentmodel;
