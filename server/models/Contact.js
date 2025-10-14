const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name1: String,
    email1: String,
    mobile: String, // Added mobile field
    message1: String,
}, { timestamps: true });

const ContactModel = mongoose.model("contact", ContactSchema);
module.exports = ContactModel;
