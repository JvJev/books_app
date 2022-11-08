import {useRef} from 'react';
import { post } from '../../plugins/http';


const Login = () => {
    const emailRef = useRef()
    const passRef = useRef()

    async function login() {
        const user = {
            email: emailRef.current.value,
            password: passRef.current.value
        }

        const data = await post("login", user)
        console.log(data)
    }

    return (
        <div>
            <input ref={emailRef} type="text" placeholder="email"/>
            <input ref={passRef} type="text" placeholder="password"/>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;