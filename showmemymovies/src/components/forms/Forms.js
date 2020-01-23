import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';


const SetField = ({ field, form, ...props }) => {
    return (
        <div className='form-group'>
            <label>{field.name}</label>
            <input {...field} {...props} type='text' className='form-control'></input> {/*par défaul le type sera text sinon {...props} qui donnera le type  */}
        </div>
    )
}
const Custom = (props) => {
    return (
        <div className='text-danger'>{props.children}</div>
    )

}
export default class Forms extends React.Component {

    submit = (values) => {
        console.log(values)
    }
    // Yup nous permet un controle sur les erreur et les autorisation du formulaire
    userSchema = Yup.object().shape({
        user: Yup.string().min(3, 'trop court').required('champ obligatoire'),
        email: Yup.string().email('mauvais email').required('champ obligatoire'),
        password: Yup.string().min(5, 'trop court')
    })
    //Et sans le module Yup 
    // ||
    // \/

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
                // validateOnBlur={false}
                // validateOnChange={false} // validateOnchange et validateOnBlur sont = a false comme ça les erreurs sont inscrites que lors que le formulaire est envoyé
                >
                    {/* // les propriétés de Formik qui son obligatoir    */}
                    {({ //values,
                        //handleBlur,
                        //handleChange,  relaod a chaque insertion de l'utilisateur 
                        handleSubmit,
                        isSubmitting,
                        //errors      errors permet de choper les erreurs que l'on récupère sur validate
                    }) => (
                            <form onSubmit={handleSubmit} className=' bg-success p-5 d-flex flex-column'>

                                <Field name='user' component={SetField} />
                                <ErrorMessage name='user' component={Custom} />
                                <Field name='email' type='email' component={SetField} />
                                <ErrorMessage name='email' component={Custom} />
                                <Field name='password' type='password' component={SetField} />
                                <ErrorMessage name='password' component={Custom} />


                                {/* Exemple de formulaire sans le Field
                                                ||
                                                \/  */}

                                {/* <div className='form-group'>
                                    <label>Password</label>
                                    <input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} type='password' className='form-control'></input>
                                    <span className='text-danger text-sm'>{errors.password}</span>
                                </div> */}
                                <button type='submit' className='btn btn-small btn-warning' disabled={isSubmitting}> Send</button>
                                {/* iSubmitting est un boolean que lors que le formulaire est envoyé il devient true donc disabled = true . Grace à cela on ne peut pas envoyer plusieurs fois le meme formulaire */}
                            </form>
                        )}
                </Formik>
            </div>
        )

    }
}