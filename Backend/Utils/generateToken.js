import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateTokenAndSetCookie = (id,res) => {
  const token=  jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '1d'});

  res.cookie("jwt", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
});
};

export default generateTokenAndSetCookie;