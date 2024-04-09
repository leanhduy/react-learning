import { useEffect } from 'react'
import { TODOLIST_API } from '../../const/json-api'

const TodoItem = ({ item, todos, setTodos }) => {
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
                        let newTodos = todos.map((t) =>
                            t.id === updatedItem.id ? updatedItem : t
                        )
                        setTodos(newTodos)
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
