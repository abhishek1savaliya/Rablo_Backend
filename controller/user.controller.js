// Import the User model
const User = require('../model/user.model');
const { generateToken } = require('../util.js/jwt');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.findOneUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = generateToken({
            firstName: user.firstName,
    lastName:user.lastName,
    email: user.email
        })

        res.status(200).json({
            message: "success",
            token: token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
