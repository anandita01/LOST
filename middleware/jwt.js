const JWT = require('jsonwebtoken');
const { validateToken } = require("../services/authentications");

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if (!tokenCookieValue) {
            return next();
        }
        try {
            const userPayload = validateToken(tokenCookieValue);
            if (!userPayload) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            req.user = userPayload;
        } catch (error) {
            console.error('Token validation error:', error);
            return res.status(401).json({ error: 'Unauthorized' });
        }
        return next();
    };
}

module.exports = { checkForAuthenticationCookie };
