import { useRef } from 'react';
import { post } from '../../plugins/http';
import "./Reg.css";
import { Button } from '@mui/material';



const Register = () => {
  const emailRef = useRef();
  const passRef = useRef();

  async function register() {
    const user = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    const data = await post('register', user);

    console.log(data);
  }

  return (
    <div className='regDiv'>
      <input className='regInput' ref={emailRef} type="text" placeholder="Email" />
      <input className='regInput' ref={passRef} type="text" placeholder="Password" />
      <button className='regButton' onClick={register}>Register</button>
      
    </div>


  );
};

export default Register;
