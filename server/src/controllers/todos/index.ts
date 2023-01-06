import { Response, Request } from "express";
import ITodo from "../../types/todo";
import todo from "../../models/todo";

const getItems = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await todo.find()
        res.status(200).json({ todos })
    } catch (e) {
        throw e
    }
}

const addItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITodo, "name" | "description" | "status">

        const item: ITodo = new todo({
            name: body.name,
            description: body.description,
            status: body.status
        })

        const newItem: ITodo = await item.save()
        const all: ITodo[] = await todo.find()

        res.status(201).json({ message: `${item.name} added succesfully`, newTodo: newItem, todos: all })
    } catch (e) {
        throw e
    }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params: { id }, body } = req
    } catch (e) {
        throw e
    }
}