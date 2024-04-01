import ApplicationError from "../../../middleware/applicationError.js";
import { add, addOption, deleteQuestion, getQuestionById } from "../model/question.repository.js";

//adding question
export const postQuestion = async(req,res,next)=>{
    try {
        const title = req.body.title;
        if(!title){
            throw new ApplicationError("title not added",400);
        }
        const newquestion = await add({title});
        if(!newquestion){
            throw new ApplicationError("question not added",400);
        }
        res.status(201).json({success:"true",msg:"question added",question:newquestion})
    } catch (error) {
        next(error);   
    }
}

//now adding option to the question

export const postOption=async(req,res,next)=>{
    try {
        //the id will the id of the question to which we want to add the option
        const id=req.params.id;
        if(!id){
            throw new ApplicationError("id not added",400);
        }
        const text=req.body.text;
        if(!text){
            throw new ApplicationError("provide the text",400);
        }
        const newOption = await addOption(text,id);
        if(!newOption){
            throw new ApplicationError("option not added",400);
        }
        res.status(201).json({success:"true",msg:"option added",option:newOption})

    } catch (error) {
        next(error);
    }
}

export const deleteQuestionId = async(req,res,next)=>{
    try {
        const id= req.params.id;
        if(!id){
            throw new ApplicationError("id not provided", 400);
        }
        const deleteOptions =await deleteQuestion(id);
        if(!deleteOptions){
            throw new ApplicationError("The provided question has vote added, cannot be deleted", 400);
        }
        res.status(201).json({success:"true",msg:"question deleted",deletedOption:deleteOptions})
    } catch (error) {
        next(error)
    }
}

export const getQuestion =async(req,res,next)=>{
    try {
        const id=req.params.id;
        if(!id){
            throw new ApplicationError("Provide a id for the question", 404);
        }
        const question = await getQuestionById(id);
        res.status(201).json({success:"true",msg:"Question found success",question:question})

    } catch (error) {
        next(error);
    }
}