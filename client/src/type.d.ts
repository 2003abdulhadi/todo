interface ITodo {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt: Date
    lastModified?: Date
}

interface TodoProps {
    item: ITodo
}

type ApiDataType = {
    message: string
    status: string
    items: ITodo[]
    item?: ITodo
}