import React, {useState} from 'react';
import './Form.css';
import validateInfo from './validate/validateInfo';
import useForm from './validate/useForm';
import FormLogin from './FormLogin';



export default function FormSignup({submitForm}) {

  const [isLogin, setIsLogin] = useState(false)

  const loginForm = (e) => {
    e.preventDefault()
    setIsLogin(!isLogin)
    // console.log(isLogin);
  }
const {handleChange, handleSubmit, values, errors } = useForm(submitForm, validateInfo)

    return (
        <div className='form-content-right'>
          {!isLogin ? (
            <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>
              Create your account by filling out the information below.
            </h1>
            <div className='form-inputs'>
              <label className='form-label'>Username</label>
              <input
                className='form-input'
                type='text'
                name='username'
                placeholder='Enter your username'
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Confirm Password</label>
              <input
                className='form-input'
                type='password'
                name='password2'
                placeholder='Confirm your password'
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='form-input-btn' type='submit'>
              Sign up
            </button>
            {/* <div className='form-icons'>
            <i className="fab fa-github"></i>
            <i className="fab fa-google"></i>
            </div> */}
            <div className='form-span'>
              <span>Already have an account?
            <button className='form-input-login' onClick={loginForm}>
              Login
            </button>
            </span>
            </div>
          </form>
          ): <FormLogin />}
      
    </div>
    )
}
