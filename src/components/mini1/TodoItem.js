import { useState } from 'react'
import { TODOLIST_API } from './api/json-api'
import Swal from 'sweetalert2'
import {
    updateSingle,
    notifySuccess,
    deleteItem,
    notifyError,
} from './services/services'
import UpdateTodoForm from './UpdateTodoForm'
import { CircleCheckbox, TodoListItem } from './utils/custom-styled-components'

const TodoItem = ({ item, setIsDbUpdated }) => {
    const [updateMode, setUpdateMode] = useState(false)
    const removeTodo = (id) => {
        Swal.fire({
            title: 'Are you sure to delete this todo?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem(`${TODOLIST_API}/${id}`)
                    .then((result) => {
                        if (result === 200) {
                            setIsDbUpdated(true)
                            notifySuccess('Deleted item succesfully!')
                        }
                    })
                    .catch((err) => notifyError(err))
            }
        })
    }

    const updateTodo = () => {
        setUpdateMode((prev) => !prev)
    }

    return (
        <TodoListItem className="list-group-item">
            {!updateMode ? (
                <div className="form-check d-flex flex-row align-items-center ">
                    <div>
                        <CircleCheckbox
                            className="form-check-input rounded-circle border-light"
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
                    </div>
                    <div className="flex-fill">
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
                        <button className="btn btn-warning">
                            <i
                                class="bi bi-pencil-square"
                                style={{ fontSize: '1.1rem' }}
                            ></i>
                        </button>
                    </div>
                    <div onClick={() => removeTodo(item.id)}>
                        <button className="btn btn-danger">
                            <i
                                class="bi bi-trash"
                                style={{ fontSize: '1.1rem' }}
                            ></i>
                        </button>
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
        </TodoListItem>
    )
}

export default TodoItem
