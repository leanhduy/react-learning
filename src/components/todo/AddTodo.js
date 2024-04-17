import { Formik, Form, Field } from 'formik'
import { object, string } from 'yup'
import { addSingle, notifySuccess, uuidv4 } from './services/services'
import { TODOLIST_API } from './api/json-api'
import { TodoInput, TodoInputBtn } from './utils/custom-styled-components'
import styled from 'styled-components'

const AddTodo = ({ nextId, setIsDbUpdated }) => {
    const addItemValidationSchema = object().shape({
        name: string().required(`Todo's Name is required`),
    })

    return (
        <>
            <Formik
                initialValues={{ name: '' }}
                onSubmit={(values, { resetForm }) => {
                    let newTodo = {
                        id: uuidv4(),
                        name: values.name,
                        isDone: false,
                    }

                    addSingle(TODOLIST_API, newTodo).then((result) => {
                        setIsDbUpdated(true)
                        notifySuccess('Add new todo successfully!')
                    })

                    resetForm()
                }}
                validationSchema={addItemValidationSchema}
            >
                {({ errors }) => (
                    <Form className="mb-3 mt-3">
                        <div className="mb-2 d-flex flex-row">
                            <TodoInput
                                name="name"
                                placeholder="New Todo..."
                            ></TodoInput>
                            <TodoInputBtn className="btn" type="submit">
                                ADD
                            </TodoInputBtn>
                        </div>
                        {errors.name && (
                            <div class="text-danger">{errors.name}</div>
                        )}
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default AddTodo
