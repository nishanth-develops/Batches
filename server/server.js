import cors from 'cors'
import express from 'express'
import 'dotenv/config'
import userRoute from './routes/userRoute.js'
const clerkAuth = require('./middleware/clerkAuth');

app.get('/api/protected', clerkAuth, (req, res) => {
  res.json({ message: `Hello, ${req.auth.userId}! You are authenticated.` });
});

// "server": "nodemon server.js" in package.json
//type:module in package.json
//app config
const app = express()
const port=process.env.PORT || 3000


//middlewares
app.use(cors())//allow fend to connect with bend
app.use(express.json())

//api endpoints
app.use('/api/user',userRoute)
//localhost:4000/api/admin




app.listen(port,()=>console.log("Server Started",port))
