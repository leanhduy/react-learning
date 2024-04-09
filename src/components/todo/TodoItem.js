import { TODOLIST_API } from '../../const/json-api'
import { updateSingle } from './services'

const TodoItem = ({ item, setIsDbUpdated }) => {
    return (
        <li className="list-group-item">
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={item.isDone}
                    id="completedItem"
                    checked={item.isDone == true ? 'checked' : ''}
                    onChange={(e) => {
                        let updatedItem = { ...item, isDone: e.target.checked }

                        // Update database
                        const url = TODOLIST_API + `/${updatedItem.id}`
                        updateSingle(url, updatedItem).then((result) => {
                            console.log(result)
                            // Update state isDbUpdate
                            setIsDbUpdated(true)
                        })
                    }}
                />
                <label
                    className={`form-check-label ${
                        item.isDone == true ? 'completed' : 'incompleted'
                    }`}
                    htmlFor="completedItem"
                >
                    {item.name}
                </label>
            </div>
        </li>
    )
}

export default TodoItem
