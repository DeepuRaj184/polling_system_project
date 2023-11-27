const express = require('express');

const router = express.Router();

const questions_controller = require('../../../controller/questions_controller');
const options_controller = require('../../../controller/options controller')


router.post('/questions/create',questions_controller.question_create)
router.post('/questions/:id/options/create',options_controller.options_create);
router.get('/questions/view/:id',questions_controller.question_view);
router.delete('/questions/:id/options/delete',options_controller.options_delete);
router.delete('/questions/:id/questions/delete',questions_controller.question_delete);
router.get('/questions/:id/options/addvote',options_controller.add_vote)

module.exports = router