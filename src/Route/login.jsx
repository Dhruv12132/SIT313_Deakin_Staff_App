import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./login.css";
import { signinwithgoogle } from "../firebase";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { setCurrentuser } = useContext(UserContext);

    const [contact, setContact] = useState({
        username: "",
        password: ""
    });

    function handleContact(event) {
        const { name, value } = event.target;

        setContact({
            ...contact,
            [name]: value
        });
    }

    function handleLogin() {
        if (contact.username === "admin" && contact.password === "1234") {
            alert("Login successful");
        } else {
            alert("Invalid username or password");
        }
    }

    const navigate = useNavigate();
    async function handleGoogleLogin1() {
      
    const response = await signinwithgoogle()
    const user = response.user
    setCurrentuser(user)
    console.log("display name:", user.displayName);
    console.log("Current User Email:", user.email);
    navigate("/profile");

    }

    return (
        <div className="login">

            <Input
                type="text"
                name="username"
                placeholder="enter username"
                value={contact.username}
                onChange={handleContact}
            />

            <br />

            <Input
                type="password"
                name="password"
                placeholder="enter Password"
                value={contact.password}
                onChange={handleContact}
            />

            <br />

            <Button
                type="button"
                text="Login"
                onClick={handleLogin}
            />

            <br />
            <br />
            <button type="button" onClick={handleGoogleLogin1}>
                Continue with Google
            </button>
            <br />
            <br />

            
        </div>
    );
}

export default Login;