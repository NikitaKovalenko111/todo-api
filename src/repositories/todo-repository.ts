import { todoItemType, todoRepositoryType } from "../types";

let todos: Array<todoItemType> = [
    
]

const dataRepository: todoRepositoryType = {
    getData: (target?: string) => todos.filter(el => el.target.toLocaleLowerCase().includes(String(target?.toLocaleLowerCase()))),
    getDataById: (id) => todos.find(el => el.id === id),
    deleteDataById: (id) => {
        const responseData: number = todos.findIndex(el => el.id === id)
        todos.splice(responseData, 1)
        return responseData
    },
    postData: (value, isCompleted) => {
        const newData: todoItemType = {
            id: Number(new Date()),
            target: value,
            isCompleted: isCompleted,
            date: new Date(Date.now()).toLocaleString(),
            dateIsCompleted: undefined
        }
          
        todos.push(newData)

        return newData
    },
    changeDataById: (id, body) => {
        const currentData = todos.find(el => el.id === id)
  
        if (currentData) {
          currentData.target = body.target
          currentData.isCompleted = body.isCompleted
          if (currentData.isCompleted === true)
            currentData.dateIsCompleted = new Date(Date.now()).toLocaleString()
          else
            currentData.dateIsCompleted = undefined
        }

        return currentData
    },
}

export default dataRepository