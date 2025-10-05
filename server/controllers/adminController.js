const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config()


const adminLogin = async (req,res)=>{
    try {
        const {email,password} = req.body;

        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD ){
            return res.status(401).json({ message : 'Invalid Creditionals'})
        }

        const token = jwt.sign({email}, process.env.JWT_SECRET)
        res.status(200).json({ success: true, message : "Admin Login Successfully", token })
    } catch (error) {
        res.status(500).json({ error : 'Admin Login Failed!'})
    }
}

module.exports = {adminLogin}