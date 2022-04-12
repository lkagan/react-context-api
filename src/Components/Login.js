import React, { useContext } from 'react';
import { LoginContext } from "../Contexts/LoginContext";

const Login = () => {

    const {setUsername, setShowProfile} = useContext(LoginContext);

    return (
        <div className={ "container col" }>
            <input
                className={ "form-control my-3" }
                type="text"
                placeholder="Username..."
                onChange={ (e) => setUsername(e.target.value) }
            />
            <input
                className={ "form-control mb-3" }
                type={ "text" }
                placeholder={ "Password..." }
            />
            <button
                className={ "form-control btn btn-primary" }
                onClick={ () => setShowProfile(true) }
            >LOGIN
            </button>
        </div>
    );
};

export default Login;