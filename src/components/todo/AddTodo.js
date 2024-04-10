import { Formik, Form, Field } from 'formik'
import { object, string } from 'yup'
import { addSingle, notifySuccess, uuidv4 } from './services'
import { TODOLIST_API } from '../../const/json-api'

const AddTodo = ({ nextId, setIsDbUpdated }) => {
    const addItemValidationSchema = object().shape({
        name: string().required(`Todo's Name is required`),
    })

    return (
        <Formik
            initialValues={{ name: '' }}
            onSubmit={(values) => {
                let newTodo = {
                    id: uuidv4(),
                    name: values.name,
                    isDone: false,
                }

                addSingle(TODOLIST_API, newTodo).then((result) => {
                    setIsDbUpdated(true)
                    notifySuccess('Add new todo successfully!')
                })
            }}
            validationSchema={addItemValidationSchema}
        >
            {({ errors }) => (
                <Form className="mb-3 mt-3">
                    <div className="mb-2">
                        <Field
                            name="name"
                            className="form-control"
                            placeholder="Add new todo..."
                        ></Field>
                        {errors.name ? (
                            <div className="text-danger">{errors.name}</div>
                        ) : null}
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Add
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default AddTodo
