import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name] : e.target.value}
    });
  }
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register__form">
          <p className="form__error-message">
            This is an error message
          </p>
          <input type="text" value={userData.name} placeholder='Full Name' name='name' onChange={changeInputHandler} />
          <input type="text" value={userData.email} placeholder='Email' name='email' onChange={changeInputHandler} />
          <input type="text" value={userData.password} placeholder='Password' name='password' onChange={changeInputHandler} />
          <input type="text" value={userData.password2} placeholder='Conform Password' name='password2' onChange={changeInputHandler} />
          <button type="submit" className='btn primary'>Submit</button>
        </form>
        <small>Already have an account? <Link to='/login'>Sign In</Link></small>
      </div>
    </section>
  )
}

export default Register