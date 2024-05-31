const express = require( 'express');
const router = express();
const todoListController = require('../controllers/todolist.js')

router.get('/',todoListController.getTodoList);
router.post('/',todoListController.createTodoList);
router.put('/:id',todoListController.updateTodoList);
router.delete('/:id',todoListController.deleteTodoList);

module.exports =router ;