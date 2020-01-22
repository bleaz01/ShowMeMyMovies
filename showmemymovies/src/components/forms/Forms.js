import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';

export default class Forms extends React.Component {

    submit = (values) => {
        console.log(values)
    }
    userSchema = Yup.object().shape({
        user: Yup.string().min(3, 'trop court').required('champs obligatoir'),
        email: Yup.string().email('mauvais email').required('champs obligatoir'),
        password: Yup.string().min(5, 'trop cours')
    })
    // formValidate = (values) => {
    //     let errors = {}
    //     values.user.length < 3 ? errors.user = '* trops court' : errors.user = null

    //     values.password.length < 6 ? errors.password = 'min 6 caratére' : errors.password = null

    //     return errors;
    // }

    render() {
        return (
            <div className='container-fluid p-5 d-flex flex-column align-items-center justify-content-center'>
                {/* Formik est un module pour faire des formulairs plus rapidement */}
                <Formik
                    onSubmit={this.submit}
                    initialValues={{ user: '', email: '', password: '' }}
                    // validate={this.formValidate}
                    validationSchema={this.userSchema}
                    validateOnBlur={false}
                    validateOnChange={false} // validateOnchange et validateOnBlur sont = a false commme sa ils les erreur sont envoyé que lors que le formulaire est envoyé
                >
                    {/* // les propriétés de Formik qui son obligatoir    */}
                    {({ values,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        errors      //errors permet de choper les erreurs que l'on récupère sur validate
                    }) => (
                            <form onSubmit={handleSubmit} className=' bg-success p-5 d-flex flex-column'>
                                <div className='form-group'>
                                    <label>User</label>
                                    <input name='user' value={values.user} onChange={handleChange} onBlur={handleBlur} type='text' className='form-control'></input>
                                    <span className='text-danger text-sm'>{errors.user}</span>
                                </div>
                                <div className='form-group'>
                                    <label>E-mail</label>
                                    <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type='email' className='form-control'></input>
                                    <span className='text-danger text-sm'>{errors.email}</span>

                                </div>
                                <div className='form-group'>
                                    <label>Password</label>
                                    <input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} type='password' className='form-control'></input>
                                    <span className='text-danger text-sm'>{errors.password}</span>
                                </div>
                                <button type='submit' className='btn btn-small btn-warning' disabled={isSubmitting}> Send</button>
                                {/* iSubmitting est un boolean que lors que le formulaire est envoyé il devient true donc disabled = true . Grace à cela on ne peut pas envoyer plusieurs fois le meme formulaire */}
                            </form>
                        )}
                </Formik>
            </div>
        )

    }
}