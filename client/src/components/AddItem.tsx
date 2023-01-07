import React from "react";

type Props = TodoProps & {
    updateItem: (todo: ITodo) => void
    deleteItem: (_id: string) => void
}

const Item: React.FC<Props> = ({ item, updateItem, deleteItem }) => {
    const checkItem: string = item.status ? `line-through` : ''

    return (
        <div className="Item">
            <div className="Item-Text">
                <h1 className={checkItem}>{item.name}</h1>
                <span className={checkItem}>{item.description}</span>
            </div>
            <div className="Add-Button">
                <button
                    className={item.status ? `hide-button` : "Item-button__done"}
                    onClick={() => updateItem(item)}
                >
                    Complete
                </button>
                <button
                    className="Delete-Button"
                    onClick={() => deleteItem(item._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Item