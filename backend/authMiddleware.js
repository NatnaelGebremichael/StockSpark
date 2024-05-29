// Check if the request is authorized
const authMiddleware = (req, res, next) => {
    const apiKey = req.headers.authorization;

    if (!apiKey || apiKey !== `Bearer ${process.env.API_KEY}`) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    next();
};

export default authMiddleware