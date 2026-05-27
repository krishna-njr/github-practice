
import { Router } from "express";

const router = Router(); 



const registerUser = async (req, res) => {
    console.log(`user is registered`); 
}

router.get('/register', registerUser);


export default router; 