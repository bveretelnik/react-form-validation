import React, { Fragment,useState } from 'react'
import { Switch } from 'react-router-dom'
import FormLogin from './FormLogin'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
export default function Form() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  const loginForm = (e) => {
    e.preventDefault()
    setIsLogin(!isLogin)
    console.log('hi');
  }
  const submitForm = () => {
    setIsSubmitted(!isSubmitted)
  }

    return (
        <Fragment>
            <div className='form-container'>
        <span className='close-btn' onClick={submitForm}>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? !isLogin ?
            <FormSignup submitForm={submitForm} onClick={loginForm}/>
            : <FormLogin /> : <FormSuccess /> }
      </div>
      <Switch>
      <Route  path="/login" component={FormLogin}/>
      </Switch>
        </Fragment>
    )
}
