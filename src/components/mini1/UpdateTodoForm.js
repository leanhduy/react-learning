import { Field, Form, Formik } from 'formik'
import { object, string } from 'yup'
import { notifyInfo, notifySuccess, updateSingle } from './services/services'
import { TODOLIST_API } from './api/json-api'

const UpdateTodoForm = ({ item, setUpdateMode, setIsDbUpdated }) => {
    const valSchema = object().shape({
        name: string().required(`Todo's name is required`),
    })

    const handleSubmit = (formValues) => {
        if (item.name === formValues.name) {
            setUpdateMode(false)
            notifyInfo('Nothing is updated')
            return
        }
        let newItem = { ...item, name: formValues.name }

        // Update database
        updateSingle(`${TODOLIST_API}/${item.id}`, newItem).then((result) => {
            setUpdateMode(false)
            setIsDbUpdated(true)
            notifySuccess(`Updated todo's name successfully!`)
        })
    }

    const cancelUpdate = () => {
        setUpdateMode(false)
    }

    return (
        <Formik
            initialValues={{
                name: item.name,
            }}
            onSubmit={handleSubmit}
            validationSchema={valSchema}
        >
            {({ errors }) => (
                <Form className="d-flex flex-row align-items-center">
                    <div className="flex-fill me-2">
                        <Field name="name" className="me-2 form-control" />
                    </div>
                    {errors.name ? (
                        <div>
                            <label className="me-2 text-danger">
                                {errors.name}
                            </label>
                        </div>
                    ) : null}
                    <button type="submit" className="btn btn-primary me-2">
                        Update
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={cancelUpdate}
                    >
                        Cancel
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default UpdateTodoForm
