import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:400";

const getItems = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const items: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/items"
        )
        
        return items
    } catch (e) {
        throw e
    }
}

const addItem = async (formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const item: Omit<ITodo, "_id"> = {
            name: formData.name,
            description: formData.description,
            status: formData.status,
            createdAt: new Date()
        }

        const save: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/add-item",
            item
        )

        return save
    } catch (e) {
        throw e
    }
}

const updateItem = async (item: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const update: Pick<ITodo, "status"> = {
            status: true
        }

        const updated: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/edit-item/${item._id}`,
            update
        )

        return updated
    } catch (e) {
        throw e
    }
}

const deleteItem = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deleted: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/delete-item/${_id}`
        )

        return deleted
    } catch (e) {
        throw e
    }
}


export {getItems, addItem, updateItem, deleteItem};