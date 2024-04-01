//schema for the questions

import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    options:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'option'
        }
    ]
})

const questionModel = mongoose.model('question',questionSchema);
export default questionModel;