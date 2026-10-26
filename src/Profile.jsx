import {getAuth} from "firebase/auth"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Profile(){
    const auth = getAuth();
    const navigate = useNavigate();
   useEffect(() => {
    console.log(auth.currentUser);
   }, []);
    
   function logout(){
    auth.signOut()
    navigate('/')
   }
    return(
        <div>
            <h1>My profile</h1>
            <p>{auth.currentUser ? auth.currentUser.displayName : "User not found"}</p>
            <button onClick = {logout}> Log Out</button>
        </div>
    )

}
export default Profile