import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    link: { type: String, required: true },
    type: { type: String, required: true },
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
