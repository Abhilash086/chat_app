export const signup = async (req,res)=>{
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;
        

    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)
    }
}

export const login = (req,res)=>{
    console.log("Login ")
}

export const logout = (req,res)=>{
    console.log("Logout ")
}