import React, {useRef} from 'react'
import '../styles/Login.scss'; 

const Login = () => {
  //Declaración 
  const form = useRef(null); 

  //Metodos 
  const handleSubmit =(e)=>{

    e.preventDefault;
    const formData = new FormData(form.current);
    const data={
      usename:formData.get('email'),
      password:formData.get('password')
    }
    console.log(data);
  }

  return (
<div className="login">
  <div className="form-container">
  <h1 className="title">Login</h1>
    <form action="/" className="form" ref={form}>
      <label htmlFor="email" className="label">Email address</label>
      <input type="text" id="email" name="email" placeholder="platzi@example.cm" className="input input-email" />
      <label htmlFor="password" className="label">Password</label>
      <input type="password" id="password" name="password" placeholder="*********" className="input input-password" />
      <input type="button" defaultValue="Log in" onClick={handleSubmit} className="primary-button login-button" />
      <a href="/recovery" className="forgot-pass">Forgot my password</a>
    </form>
    <button className="secondary-button signup-button" >Sign up</button>
  </div>
</div>

  )
}

export default Login