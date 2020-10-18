import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom'; 

import {MovieListContext} from './../Context';

const Login = (props) => {
    const history = useHistory();

    const [, setIsLoggedIn, , setUsername] = useContext(MovieListContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        // username and password validity
        if (uname !== "admin" && password !== "admin") {
            setErrorMessage("Username/Password salah")
            return
        }

        setIsLoggedIn(true);
        setUsername(uname);

        history.push("/");
    }

    const handleChange = (event) => {
        switch (event.target.id) {
            case "username":
                setUname(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;
            default:
        }
    };

    let errorMessageElement;
    if (errorMessage !== "") {
        errorMessageElement = <div className="error-message-login">{errorMessage}</div>;
    }

    return (
        <div className="container">
            <div className="login-container">
                {errorMessageElement}
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Username:</strong> </td>
                            <td><input id="username" style={{width: 150}} value={uname} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><strong>Password:</strong> </td>
                            <td><input type="password" id="password" style={{width: 150}} value={password} onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="button-login-container">
                    <button onClick={() => login()}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;