import todoRepository from "../repositories/todo-repository"
import { Request, Response } from "express"
import { Statuses, todoItemType } from "../types"

export const getTodosController = (req: Request, res: Response): void => {
    res.send(todoRepository.getData())
}

export const getTodosByIdController = (req: Request, res: Response) => {
    const currentId: number = Number(req.params.id)
    const responseData: todoItemType | undefined = todoRepository.getDataById(currentId)
  
    res.send(responseData ? responseData : Statuses.NotFound)
}

export const deleteTodoByIdController = (req: Request, res: Response) => {
    const currentId: number = Number(req.params.id)
    const responseData: number = todoRepository.deleteDataById(currentId)

    res.sendStatus(responseData != -1 ? Statuses.GoodWithoutContent : Statuses.NotFound)
}

export const postTodoController = (req: Request, res: Response) => {
    const newData: todoItemType = todoRepository.postData(req.body.value, false)
  
    res.status(Statuses.Created).send(newData)
}

export const changeTodoByIdController = (req: Request, res: Response) => {
    const currentId: number = Number(req.params.id)
    const currentData: todoItemType | undefined = todoRepository.changeDataById(currentId, req.body)

    currentData ? res.send(Statuses.OK) : Statuses.NotFound
}