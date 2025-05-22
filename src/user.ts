import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    link: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }

)

const User = mongoose.model('User', userSchema);
export default User;