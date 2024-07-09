const db = require('../config/firebase');

const addUser = async (data) => {
    console.log(data);
    const docRef = db.collection('users').doc();
    await docRef.set(data);
    return docRef.id;
};

module.exports = {
    addUser
};