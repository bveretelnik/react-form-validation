import { useState, useEffect } from 'react';

export const useForm = (callback,validate) => {
        const [values,setValue] = useState({
                username: '',
                email: '',
                password: '',
                password2: ''
            })


    const handleChange = e => {
        const {name,value} = e.target
        setValue({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()


    }

    return {handleChange, handleSubmit, values,}
}