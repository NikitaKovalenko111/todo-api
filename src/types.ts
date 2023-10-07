import mongoose, { HydratedDocument, Types } from "mongoose"

export enum Statuses {
    "GoodWithoutContent" = 204,
    "NotFound" = 404,
    "Created" = 201,
    "OK" = 200,
    "BadRequest" = 400
}

export interface todoItemType {
    target: string
    id?: Types.ObjectId | number
    isCompleted: boolean
    date: Date
    dateIsCompleted: Date | undefined | boolean
}

export interface changeTodoByIdBody {
    target: string
    isCompleted: boolean
}

export interface todoRepositoryType {
    getData: (target: string) => Promise<Array<HydratedDocument<todoItemType>>>
    getDataById: (id: string) => Promise<HydratedDocument<todoItemType>>
    deleteDataById: (id: string) => Promise<HydratedDocument<todoItemType>>
    postData: (target: string, isCompleted: boolean) => Promise<HydratedDocument<todoItemType>>
    changeDataById: (id: string, body: changeTodoByIdBody) => Promise<HydratedDocument<todoItemType>>
}

export type todoType = Array<todoItemType>