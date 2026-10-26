
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import "./header.css";

function Header(props) {
    const { currentUser } = useContext(UserContext);

    return (
        <div className="header">
            <h1>{props.heading}</h1>

            {currentUser
            && (
                <p>
                    Welcome, {currentUser.displayName}
                </p>
            )}
        </div>
    );
}

export default Header;
