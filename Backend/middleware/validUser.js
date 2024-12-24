import jwt from 'jsonwebtoken';

const verify = async (req, res, next) => {
    try {
        // Check if the Authorization header is present
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token provided' });
        }

        // Extract the token
        const token = authHeader.split(' ')[1];

        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Attach the decoded user information to the request object
        req.user = decoded.user;

        // Proceed to the next middleware or route
        next();
    } catch (error) {
        console.error('Error verifying token:', error);

        // Respond with 403 if token is invalid or expired
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};

export default verify;
