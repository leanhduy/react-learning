import { Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

const SignIn = () => {
    const signInSchema = object().shape({
        username: string()
            .required('Username is required!')
            .min(3, 'Username must have at least 3 characters')
            .max(8, 'Username must have maximum 8 characters'),
        password: string().required('Password is required!'),
    })

    return (
        <>
            <button className="btn btn-primary">CLICK HERE TO LOG IN</button>
            {/* 
                // TODO: Commented for now, as we don't have backend to generate and verify JWT yet. Use mockup token in the mean time
            */}
            {/* <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={() => {
                    // SignIn(usr, pwd)
                }}
                validationSchema={signInSchema}
            >
                {({ errors, touched }) => (
                    <Form className="container w-50 mt-5">
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="username">
                                Username
                            </label>
                            <Field
                                name="username"
                                className="form-control"
                                id="username"
                            />
                            {touched.username && errors.username ? (
                                <div className="text-danger">
                                    {errors.username}
                                </div>
                            ) : null}
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="password">
                                Password
                            </label>
                            <Field
                                name="password"
                                className="form-control"
                                id="password"
                                type="password"
                            />
                            {touched.password && errors.password ? (
                                <div className="text-danger">
                                    {errors.password}
                                </div>
                            ) : null}
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block mb-4 w-100"
                            >
                                Sign In
                            </button>
                        </div>
                    </Form>
                )}
            </Formik> */}
        </>
    )
}

export default SignIn
