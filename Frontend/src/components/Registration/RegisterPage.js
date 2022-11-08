import { useRef } from 'react';
import { post } from '../../plugins/http';


const Register = () => {
  const emailRef = useRef();
  const passRef = useRef();

  async function register() {
    const user = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    const data = await post('register', user)


        console.log(data)
  }

  return (
    <div>
      <input ref={emailRef} type="text" placeholder="email" />
      <input ref={passRef} type="text" placeholder="pass one" />
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;
