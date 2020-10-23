import React from 'react'

export default function FormLogin() {
    return (
        <div className='form-content-right'>
      <form  onSubmit={()=>console.log('hi')} className='form' noValidate>
        <h1>
          Login
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            // value={values.email}
            // onChange={handleChange}
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            // value={values.password}
            // onChange={handleChange}
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        </form>
        </div>
    )
}
