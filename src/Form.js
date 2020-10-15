import React, { Fragment,useState } from 'react'
import FormSignup from './FormSignup'
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

export default function Form() {

  const [isSubmitted, isSubmitted] = useState(false)

  function submitForm () {
    setIsSubmitted(true)
  }
    return (
        <Fragment>
            <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm = {submitForm}/>
        ) : (
          <FormSuccess />
        )}
      </div>
        </Fragment>
    )
}
