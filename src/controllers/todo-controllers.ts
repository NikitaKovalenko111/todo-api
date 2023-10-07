import todoRepository from "../repositories/todo-repository"
import { Request, Response } from "express"
import { Statuses, todoItemType } from "../types"

export const getTodosController = (req: Request, res: Response): void => {
    todoRepository.getData(req.query.target as string).then(data => {
        res.status(Statuses.OK).json(data)
    })
}

export const getTodosByIdController = (req: Request, res: Response) => {
    const currentId: string = req.params.id
    todoRepository.getDataById(currentId).then((data) => {
        res.status(Statuses.OK).json(data ? data : Statuses.NotFound)
    })
}

export const deleteTodoByIdController = (req: Request, res: Response) => {
    const currentId: string = req.params.id
    todoRepository.deleteDataById(currentId).then((data) => {
        res.status(Statuses.OK).json(data ? data : Statuses.NotFound)
    })
}

export const postTodoController = (req: Request, res: Response) => {
    todoRepository.postData(req.body.target, false).then((data) => {
        res.status(data ? Statuses.Created : Statuses.NotFound).json(data)
    })
}

export const changeTodoByIdController = (req: Request, res: Response) => {
    const currentId: string = req.params.id
    todoRepository.changeDataById(currentId, req.body).then((data) => {
        res.status(Statuses.OK).json(data)
    })
}