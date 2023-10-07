import { changeTodoByIdController, deleteTodoByIdController, getTodosByIdController, getTodosController, postTodoController } from '../controllers/todo-controllers';
import { Router } from "express"
import { targetValidatorMiddleware } from './../middlewares/todo-middlewares'

export const todoRouter: Router = Router()

todoRouter.get('/', getTodosController)
  
todoRouter.get('/:id', getTodosByIdController)
  
todoRouter.delete('/:id', deleteTodoByIdController)
  
todoRouter.post('/', targetValidatorMiddleware, postTodoController)
  
todoRouter.patch('/:id', targetValidatorMiddleware, changeTodoByIdController)