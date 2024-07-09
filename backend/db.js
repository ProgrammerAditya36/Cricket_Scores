const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:232004Aditya%40mongo@cluster0.dahrvb8.mongodb.net/cricket_scores');
const UserSchema = new mongoose.Schema({
    name: String,
    runs: Number,
    wickets: Number
});
const User = mongoose.model('User', UserSchema);
exports.User = User;