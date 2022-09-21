import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-store";
import classes from "./Header.module.css";

const Header = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);
    const onLogOutHandler = () => {
        dispatch(authActions.logOut());
    };

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {auth.isAuthenticated && (
                <nav>
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                        <li>
                            <button onClick={onLogOutHandler}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
