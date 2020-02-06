import * as axios from 'axios'



const dBase = axios.create({
    baseURL: 'https://film-5eeea.firebaseio.com/'

})
export default dBase