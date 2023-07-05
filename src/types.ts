export enum Statuses {
    "GoodWithoutContent" = 204,
    "NotFound" = 404,
    "Created" = 201,
    "OK" = 200,
    "BadRequest" = 400
}

export interface todoItemType {
    target: string
    id: number
    isCompleted: boolean
    date: string
    dateIsCompleted: string | undefined
}

export interface changeTodoByIdBody {
    target: string
    isCompleted: boolean
}

export interface todoRepositoryType {
    getData: () => Array<todoItemType>
    getDataById: (id: number) => todoItemType | undefined
    deleteDataById: (id: number) => number
    postData: (target: string, isCompleted: boolean) => todoItemType
    changeDataById: (id: number, body: changeTodoByIdBody) => todoItemType | undefined
}

export type todoType = Array<todoItemType>