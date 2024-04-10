import { useState } from 'react'
import { TODOLIST_API } from '../../const/json-api'
import {
    updateSingle,
    notifySuccess,
    deleteItem,
    notifyError,
} from './services'
import UpdateTodoForm from './UpdateTodoForm'

const TodoItem = ({ item, setIsDbUpdated }) => {
    const [updateMode, setUpdateMode] = useState(false)
    const removeTodo = (id) => {
        deleteItem(`${TODOLIST_API}/${id}`)
            .then((result) => {
                if (result === 200) {
                    setIsDbUpdated(true)
                    notifySuccess('Deleted item succesfully!')
                }
            })
            .catch((err) => notifyError(err))
    }

    const updateTodo = () => {
        setUpdateMode((prev) => !prev)
    }

    return (
        <li className="list-group-item">
            {!updateMode ? (
                <div className="form-check d-flex flex-row align-items-center">
                    <div className="flex-fill">
                        <input
                            className="form-check-input me-4"
                            type="checkbox"
                            value={item.isDone}
                            id="completedItem"
                            checked={item.isDone == true ? 'checked' : ''}
                            onChange={(e) => {
                                let updatedItem = {
                                    ...item,
                                    isDone: e.target.checked,
                                }

                                // Update database
                                const url = TODOLIST_API + `/${updatedItem.id}`
                                updateSingle(url, updatedItem).then(
                                    (result) => {
                                        // Update state isDbUpdate
                                        notifySuccess(
                                            'Update todos successfully!'
                                        )
                                        setIsDbUpdated(true)
                                    }
                                )
                            }}
                        />
                        <label
                            className={`form-check-label ${
                                item.isDone == true
                                    ? 'completed'
                                    : 'incompleted'
                            }`}
                            htmlFor="completedItem"
                        >
                            {item.name}
                        </label>
                    </div>
                    <div className="mx-3" onClick={() => updateTodo(item.id)}>
                        <button className="btn btn-warning">Edit</button>
                    </div>
                    <div
                        className="align-self-end"
                        onClick={() => removeTodo(item.id)}
                    >
                        <button className="btn btn-danger">Remove</button>
                    </div>
                </div>
            ) : (
                <div className="flex-fill">
                    {
                        <UpdateTodoForm
                            item={item}
                            setUpdateMode={setUpdateMode}
                            setIsDbUpdated={setIsDbUpdated}
                        />
                    }
                </div>
            )}
        </li>
    )
}

export default TodoItem
