import { useState, useEffect } from 'react';


<<<<<<< HEAD
const useForm = (callback,validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
=======
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

>>>>>>> c1dc54bdf45d0df8cc26b8471042f75c604150c8

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validate(values))
        setIsSubmitting(true)
    }

<<<<<<< HEAD
    useEffect(() => {
        {
            if(Object.keys(errors).length === 0 && isSubmitting){
                callback()
            }
=======
    useEffect(()=> {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
>>>>>>> c1dc54bdf45d0df8cc26b8471042f75c604150c8
        }
    },[errors])


    return {values, errors, handleChange, handleSubmit}
}
export default useForm