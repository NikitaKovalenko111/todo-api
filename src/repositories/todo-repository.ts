import { HydratedDocument } from 'mongoose';
import { todoItemType, todoRepositoryType } from "../types";
import Goal from "../models/goal-model";

const dataRepository: todoRepositoryType = {
    getData: async (target: string) => {  
        const goals = await Goal.find({ target: {$regex: target} }).then(el => el)
        
        return goals as Array<HydratedDocument<todoItemType>>
    },
    getDataById: async (id) => {
        const goal = await Goal.findById(id).then(el => el)
        
        return goal as HydratedDocument<todoItemType>
    },
    deleteDataById: async (id) => {
        const responseData = await Goal.findByIdAndRemove(id).then(el => el)
        
        return responseData as HydratedDocument<todoItemType>
    },
    postData: async (value, isCompleted) => {
        const newData: todoItemType = {
            target: value,
            isCompleted: isCompleted,
            date: new Date(Date.now()),
            dateIsCompleted: undefined
        }
          
        const responseData = await Goal.create(newData)

        return responseData as HydratedDocument<todoItemType>
    },
    changeDataById: async (id, body) => {
        let patchObject: todoItemType = {
            target: body.target, 
            isCompleted: body.isCompleted,
            date: new Date(Date.now()),
            dateIsCompleted: undefined
        }

        if (body.isCompleted) {
            patchObject.dateIsCompleted = body.isCompleted ? new Date(Date.now()) : undefined
        }

        const changedData = await Goal.findByIdAndUpdate(id, patchObject)

        return changedData as HydratedDocument<todoItemType>
    },
}

export default dataRepository