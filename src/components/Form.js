import React, { Fragment,useState } from 'react'
// import {BrowserRouter, Switch, Route } from 'react-router-dom'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
export default function Form({}) {

  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const submitForm = () => {
    setIsSubmitted(!isSubmitted)
  }

    return (
        <Fragment>
            <div className='form-container'>
        <span className='close-btn' onClick={()=>console.log("Close")}>×</span>
        <div className={ !isSubmitted?'form-content-left':'form-content2-left'}>
          <img className='form-img' src={!isSubmitted? 'img/close.png': 'img/open.png'} alt='spaceship' />
        </div>
        {!isSubmitted ?
            <FormSignup submitForm={submitForm}/>
            : <FormSuccess /> }
      </div>
        </Fragment>
    )
}
