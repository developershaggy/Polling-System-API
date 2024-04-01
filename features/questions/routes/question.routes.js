import express from 'express';
import { deleteQuestionId, getQuestion, postOption, postQuestion } from '../controller/question.controller.js';

const questionRouter = express.Router();

questionRouter.post('/create',postQuestion);
questionRouter.post('/:id/options/create',postOption);
questionRouter.delete('/:id/delete',deleteQuestionId);
questionRouter.get('/:id',getQuestion);

export default questionRouter;