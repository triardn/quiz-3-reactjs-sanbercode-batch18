import {useHistory} from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");

    history.push("/");
}

export default Logout;