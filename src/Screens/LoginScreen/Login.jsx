import React from 'react';
import "./Login.scss"

const Login = () => {
    return (
        <div className='login'>
            <div className='login__container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png.png" alt="" />
                <button>Login With google</button>
                <p>This project is made using  YOUTUBE DATA API </p>
            </div>
        </div>
    );
}

export default Login;
