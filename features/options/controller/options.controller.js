import ApplicationError from "../../../middleware/applicationError.js";
import { addvote, deleteOptionId } from "../model/options.repository.js";


export const addVoteOption=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const vote = await addvote(id);
        if(!vote){
            throw new ApplicationError("Vote not added ", 400);
        }
        res.status(200).json({success:true,msg:"vote added",option:vote})
        
    } catch (error) {
        next(error);
        
    }
}

export const deleteOption= async(req,res,next)=>{
    try {
        const id=req.params.id;
        const deletedOption =await deleteOptionId(id);
        res.status(200).json({success:true,msg:"option deleted",option:deletedOption})
        
    } catch (error) {
        next(error);
    }
}