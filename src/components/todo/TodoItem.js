import { TODOLIST_API } from '../../const/json-api'
import {
    updateSingle,
    notifySuccess,
    deleteItem,
    notifyError,
} from './services'

const TodoItem = ({ item, setIsDbUpdated }) => {
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

    return (
        <li className="list-group-item">
            <div className="form-check d-flex flex-row align-items-center">
                <div className="mx-3">
                    <input
                        className="form-check-input"
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
                            updateSingle(url, updatedItem).then((result) => {
                                // Update state isDbUpdate
                                notifySuccess('Update todos successfully!')
                                setIsDbUpdated(true)
                            })
                        }}
                    />
                </div>
                <div className="flex-fill">
                    <label
                        className={`form-check-label ${
                            item.isDone == true ? 'completed' : 'incompleted'
                        }`}
                        htmlFor="completedItem"
                    >
                        {item.name}
                    </label>
                </div>
                <div
                    className="align-self-end"
                    onClick={() => removeTodo(item.id)}
                >
                    <button className="btn btn-danger">Remove</button>
                </div>
            </div>
        </li>
    )
}

export default TodoItem
