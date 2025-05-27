import { hash } from 'crypto';
import mongoose from 'mongoose';

const link = new mongoose.Schema({
    hash: { type: String, required: true },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }

})
const linkModel = mongoose.model('Link', link);
export default linkModel;