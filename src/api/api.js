import { Axios } from './Axios'

export const apiHandleContactForm = (info) => {
    return new Promise ((resolve, reject) => {
        Axios.post('/contact/contact', info)
            .then(result => {
                resolve(result)
            })
            .catch(error => {
                reject(error)
            })
    })
}