
import app from 'app.js'; 



const PORT = process.env.PORT || 5000; 

app.listen(PORT, async (req, res) => {
    console.log(`server is up on running on ${PORT}`); 
} )