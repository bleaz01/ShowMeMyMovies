import React from "react"
import { Formik } from "formik"
import apiMovie, { apiMoviesMap } from '../../conf/api.movie'




export default class SearchBar extends React.Component {

    submit = (values, action) => {
        // console.log(value)
        console.log(values)
        const query = '?' + Object.keys(values).map(v => `${v}=${values[v]}&`).join('');
        console.log(query);

        apiMovie.get('/search/movie' + query).then(response => response.data.results).then(data => {
            const movies = data.map(apiMoviesMap)
            this.props.updateMovies(movies)
            setTimeout(() => {
                action.isSubmitting = 'false';
                action.resetForm();
            }, 1000);
        }).catch(erro => console.log(erro))

    }





    render() {
        return (
            <Formik onSubmit={this.submit}
                initialValues={{ query: '', language: 'en-US' }}
            >{
                    ({
                        handleSubmit,
                        handleBlur,
                        handleChange,
                        isSubmitting,

                    }) =>
                        (<form onSubmit={handleSubmit}>
                            <input type='text' name="query" onBlur={handleBlur} onChange={handleChange} placeholder='Search..' />
                            <button type='submit' disabled={isSubmitting} className='btn btn-success'>Send</button>
                        </form>)}

            </Formik>

        )
    }
}          
