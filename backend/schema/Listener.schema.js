import mongoose from "mongoose";

const listnerSchema = new mongoose.Schema({

    fullname : {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: "Listener"
    },

    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },

    bio : {
        type: String,
        maxlength: 500
    },

    trainingCompleted : {
        type: Boolean,
        default: false
    },

    isActive: {
        type: Boolean,
        default: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});


export default mongoose.model("Listener", listnerSchema);