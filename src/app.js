import express from 'express';
import cors from 'cors'; 



const app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.use('/', (req, res)=> {
    console.log("application level route"); 
})


export default app; 