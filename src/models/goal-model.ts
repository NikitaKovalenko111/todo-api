import mongoose from "mongoose"
import { todoItemType } from "../types"

const Schema = mongoose.Schema

export const goalSchema = new Schema<todoItemType>({
    target: {
        type: String,
        require: true
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        require: true
    },
    dateIsCompleted: {
        type: Date
    },
})

const Goal = mongoose.model<todoItemType>('Goal', goalSchema)

export default Goal