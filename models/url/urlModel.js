const mongoose = require("mongoose")

// Create your User model's schema here and export it.

const linkSchema = new mongoose.Schema({
    longurl: {
        type: String,
        required: true,
        unique: true
    },
    shorturl: {
        type: String,
        unique: true
    },
    date: {
        type: Date,
        default: new Date(),
    }


}, {
    timestamps: true,
    toObject: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        },
    },
});

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;