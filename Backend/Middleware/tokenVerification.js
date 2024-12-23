import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";


const tokenVerification = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized No token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({ error: "Unauthorized" });
        }
        const user = await User.findById(decoded.id).select("-password");
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in token verification middleware", error.message);
        return res.status(401).json({ error: "Unauthorized" });
    }
    };


export default tokenVerification;