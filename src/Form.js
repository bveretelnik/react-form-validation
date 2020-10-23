import React, { Fragment,useState } from 'react'
<<<<<<< HEAD
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

=======
import FormSignup from './FormSignup'
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

export default function Form() {

  const [isSubmitted, isSubmitted] = useState(false)

  function submitForm () {
    setIsSubmitted(true)
  }
>>>>>>> c1dc54bdf45d0df8cc26b8471042f75c604150c8
    return (
        <Fragment>
            <div className='form-container'>
        <span className='close-btn' onClick={submitForm}>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
<<<<<<< HEAD
        {!isSubmitted ? !isLogin ?
            <FormSignup submitForm={submitForm} onClick={loginForm}/>
            : <FormLogin /> : <FormSuccess /> }
=======
        {!isSubmitted ? (
          <FormSignup submitForm = {submitForm}/>
        ) : (
          <FormSuccess />
        )}
>>>>>>> c1dc54bdf45d0df8cc26b8471042f75c604150c8
      </div>
      <Switch>
      <Route  path="/login" component={FormLogin}/>
      </Switch>
        </Fragment>
    )
}
