import { useRef } from 'react';
import { post } from '../../plugins/http';

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();

  async function login() {
    const user = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    const data = await post('login', user);
    console.log(data);
  }

  return (
    <div className='regDiv'>
      <input className='regInput' ref={emailRef} type="text" placeholder="Email" />
      <input className='regInput' ref={passRef} type="text" placeholder="Password" />
      <button className='regButton' onClick={login}>Login</button>
    </div>
  );
};

export default Login;
