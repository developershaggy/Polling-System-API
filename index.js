import express from 'express';
import mongoose from 'mongoose';
import { connectToDb } from './src/config/db.js';
import ApplicationError from './middleware/applicationError.js';
import questionRouter from './features/questions/routes/question.routes.js';
import optionRouter from './features/options/routes/options.routes.js';

const app=express();
app.use(express.json()); 
app.use(express.urlencoded({extended:true}))


// Default route
app.get('/', (req,res,next)=>{
    res.send("Welcome to Polling System API!");
});

//question routes
app.use('/api/questions',questionRouter);
app.use('/api/options',optionRouter)

//error handling
app.use((err, req, res, next)=>{
    console.log(err);
    if(err instanceof mongoose.Error.ValidationError)
    {
        return res.status(400).json({
            success: "false",
            error: err.message
        });
    }
    if(err instanceof ApplicationError)
    {
        return res.status(err.statusCode || 500).json({
            success: "false",
            error: err.message
        });
    }
    res.status(500).json({
        success: "false",
        error: "Something went wrong."
    });
});

//for wrong routes 
app.use((req,res,next)=>{
    res.status(404).send("This route does not exist please enter correct route.");
});

app.listen(3000,()=>{
    console.log('server listening on 3000');
    connectToDb();
})