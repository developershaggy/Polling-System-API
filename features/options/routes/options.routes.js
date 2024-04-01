import express from 'express';
import { addVoteOption, deleteOption } from '../controller/options.controller.js';


const optionRouter = express.Router();

//all the routes for options
optionRouter.get('/:id/add_vote',addVoteOption);
optionRouter.delete('/:id/delete',deleteOption);

export default optionRouter;