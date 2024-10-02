import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {

    const token = req.cookies.token; // lay tu cookie - duoc dinh nghia trong utils/generatecokie.js

    if (!token) return res.status(400).json({success: false, message: "Unauthorized - no token provided"})
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) return res.status(401).json({success: false, message: "Unauthrized - invalid token"});

        req.userId = decoded.userId;

        next();
    } catch (error) {
        console.log("Error in verify token ", error);
        return res.status(400).json({success: false, message: "Server error ", error})
    }
}