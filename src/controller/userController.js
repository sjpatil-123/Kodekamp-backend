const { addUser } = require('../models/user');

const submitForm = async (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    if (!name || !email || !message) {
        return res.status(400).send({ error: 'All fields are required' });
    }

    try {
        const id = await addUser({ name, email, message });
        res.status(201).send({ success: 'Form submitted successfully', id });
    } catch (error) {
        res.status(500).send({ error: 'Error saving submission' });
    }
};

module.exports = {
    submitForm
};