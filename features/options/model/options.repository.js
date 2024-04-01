import optionModel from "./options.schema.js";
import ApplicationError from "../../../middleware/applicationError.js";

//adding votes to options based on id
export const addvote= async(id)=>{
    try {
        const option =await optionModel.findById(id);
        if(!option){
            throw new ApplicationError('Option not found for this id', 400);

        }
        option.votes++;
        return await option.save();
        
    } catch (error) {
        throw error;
    }
}

//now delete option by id
export const deleteOptionId =async(id)=>{
    try {
        const option = await optionModel.findById(id);
        if(!option){
            throw new ApplicationError("Option not found", 404);
        }
        if(option.votes > 0){
            throw new ApplicationError("votes are there for this option so , it cannot be deleted", 404);
        }
        return await optionModel.findByIdAndDelete(id);
        
    } catch (error) {
        throw error;
    }
}