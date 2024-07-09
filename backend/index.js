const express = require('express')
const User = require('./db').User
const app = express()
app.use(express.json())
app.get('/', async(req, res) => {
    const data = await User.find();
    res.send(data);
})
app.post('/',async(req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
});
app.put('/:id', async(req, res) => {
    const user= await User.findByIdAndUpdate(req.params.id, req.body);
    res.json("message: 'User updated successfully'");
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})