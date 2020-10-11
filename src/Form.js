import React, { Fragment } from 'react'
import FormSignup from './FormSignup'

export default function Form() {
    return (
        <Fragment>
            <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        <FormSignup/>
      </div>
        </Fragment>
    )
}
