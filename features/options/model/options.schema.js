//schema for the questions

import mongoose from "mongoose";

const optionsSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    question:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'question'
    },
    votes:{
        type:Number,
        default:0
    },
    link_to_vote:{
        type:String
    }
    
})

const optionModel = mongoose.model('option',optionsSchema);
export default optionModel;