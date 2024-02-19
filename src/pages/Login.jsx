import React,{useState} from 'react'
import { Link } from 'react-router-dom';

 

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
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
          <input type="text" value={userData.email} placeholder='Email' name='email' onChange={changeInputHandler} />
          <input type="text" value={userData.password} placeholder='Password' name='password' onChange={changeInputHandler} />
          <button type="submit" className='btn primary'>Submit</button>
        </form>
        <small>Don't have an account? <Link to='/register'>Sign Up</Link></small>
      </div>
    </section>
  )
}

export default Login