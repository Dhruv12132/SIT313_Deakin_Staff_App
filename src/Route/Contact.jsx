import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "../login.css";
function Login() {

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

          

        </div>
    );
}

export default Login;