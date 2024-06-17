const JWT = require('jsonwebtoken');
const secret = 'your-secret-key';  // Ensure this is a secure, non-guessable string

function createTokenForStudent(user) {
    const payload = {
        _id: user._id,
        email: user.email
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token) {
    try {
        const payload = JWT.verify(token, secret);
        return payload;
    } catch (err) {
        console.error('Token validation error:', err);
        return null; // Or throw an error if you prefer
    }
}

module.exports = { createTokenForStudent, validateToken };
