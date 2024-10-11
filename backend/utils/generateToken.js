import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET,{
        expiresIn: '15d'
    });

    res.cookie("jwt",token, {
        maxAge: 1000*60*60*24*15,   // Milliseconds
        httpOnly: true,             // Prevents XSS attacks cross-site scripting attacks
        sameSite: "strict",          // CSRF attacks cross-site request forgery attack
        secure: process.env.NODE_ENV !== "development"                // 
    });
};

export default generateTokenAndSetCookie;