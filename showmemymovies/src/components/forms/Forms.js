import React from 'react'
import { Formik } from 'formik'

export default class Forms extends React.Component {

    submit = (values) => {
        console.log(values)
    }

    render() {
        return (
            <div className='container-fluid p-5 d-flex flex-column align-items-center justify-content-center'>
                {/* Formik est un module pour faire des formulairs plus rapidement */}
                <Formik
                    onSubmit={this.submit}
                    initialValues={{ name: '', email: '', password: '' }}
                >
                    {/* // les propriétés de Formik qui son obligatoir    */}
                    {({ values,
                        handleBlur,
                        handleChange,
                        handelSubmit,
                        isSubmitting
                    }) => (
                            <form onSubmit={handelSubmit} className=' bg-success p-5 d-flex flex-column'>
                                <div className='form-group'>
                                    <label>User</label>
                                    <input name='user' value={values.user} onChange={handleChange} onBlur={handleBlur} type='text' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label>E-mail</label>
                                    <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type='email' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label>Password</label>
                                    <input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} type='password' className='form-control'></input>
                                </div>
                                <button type='submit' className='btn btn-small btn-warning' disabled={isSubmitting}> Send</button>
                            </form>
                        )}
                </Formik>
            </div>
        )

    }
}