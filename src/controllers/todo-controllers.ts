import todoRepository from "../repositories/todo-repository"
import { Request, Response } from "express"
import { Statuses, todoItemType } from "../types"

export const getTodosController = (req: Request, res: Response): void => {
    res.json(todoRepository.getData()).sendStatus(Statuses.OK)
}

export const getTodosByIdController = (req: Request, res: Response) => {
    const currentId: number = Number(req.params.id)
    const responseData: todoItemType | undefined = todoRepository.getDataById(currentId)
  
    res.json(responseData ? responseData : Statuses.NotFound).sendStatus(Statuses.OK)
}

export const deleteTodoByIdController = (req: Request, res: Response) => {
    const currentId: number = Number(req.params.id)
    const responseData: number = todoRepository.deleteDataById(currentId)

    res.sendStatus(responseData != -1 ? Statuses.GoodWithoutContent : Statuses.NotFound)
}

export const postTodoController = (req: Request, res: Response) => {
    const newData: todoItemType = todoRepository.postData(req.body.target, false)
  
    res.json(newData).sendStatus(Statuses.Created)
}

export const changeTodoByIdController = (req: Request, res: Response) => {
    const currentId: number = Number(req.params.id)
    const currentData: todoItemType | undefined = todoRepository.changeDataById(currentId, req.body)

    currentData ? res.sendStatus(Statuses.OK) : Statuses.NotFound
}