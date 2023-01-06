import { Document } from "mongoose";

export default interface ITodo extends Document {
    name: string
    description: string
    status: boolean
}