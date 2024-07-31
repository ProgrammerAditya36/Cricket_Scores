const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:test123@cluster0.dahrvb8.mongodb.net/cricket_scores');
const UserSchema = new mongoose.Schema({
    name: String,
    runs: Number,
    wickets: Number,
    catches: Number,
});
const User = mongoose.model('User', UserSchema);
exports.User = User;