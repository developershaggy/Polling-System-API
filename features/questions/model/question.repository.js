import questionModel from "./question.schema.js";
import optionModel from "../../options/model/options.schema.js";
import ApplicationError from "../../../middleware/applicationError.js";
import { ObjectId } from "bson";


//creating a question
export const add= async(title)=>{
    try {
        const newQuestion = new questionModel(title);
        return await newQuestion.save();
        
    } catch (error) {
        throw error;
    }
}

export const addOption = async(text,id)=>{
    try{
        const port=3000;
        const questionPresent=await questionModel.findById(id);
        if(!questionPresent){
         throw new ApplicationError("question does not exist for this id", 404);
        }
        const newOption = new optionModel({
            text:text,
            question:new ObjectId(id),
            link_to_vote: `http://localhost:${port}/api/options/${id}/add_vote`
        });
        const saveOption = await newOption.save();
        const getOptionId =  saveOption._id;
        //adding the id of the option to the link_to_vote
        const link_to_vote= `http://localhost:${port}/api/options/${getOptionId}/add_vote`;

        const updateOption = await optionModel.findByIdAndUpdate(getOptionId,{link_to_vote},{new:true});
        
        //now adding the option id to the question array
        await questionModel.findByIdAndUpdate(id,{$push:{options:getOptionId}});
        return updateOption;

    }
    catch(error){
        throw error;
    }
}



//delete question based on question id
export const deleteQuestion = async(id)=>{
    try {
        const question = await questionModel.findById(id);
        if(!question){
            throw new ApplicationError("Question not found for this id", 404);
        }
        //now getting the options related to that question id
        const options = await optionModel.find({question:id})
        //now checking if the options has votes more than 0
        const optionWithVotes = options.some((option)=>option.votes > 0);
        if(optionWithVotes){
            throw new ApplicationError("Question cannot be deleted, votes of the option is greater than zero", 404);
        }
        else{
            //now deleting the options which is related to the question
            await optionModel.deleteMany({question :new ObjectId(id)});
            //now deleting the question
            return await questionModel.findByIdAndDelete(id);
        }
    
        
    } catch (error) {
        throw error;
        
    }
}

//get the questions by id
export const getQuestionById=async(id)=>{
    try {
        const question = await questionModel.findById(id).populate('options');
        if(!question){
            throw new ApplicationError("question with this id not found", 404);

        }
        return question;
        
    } catch (error) {
        throw error;
        
    }
}