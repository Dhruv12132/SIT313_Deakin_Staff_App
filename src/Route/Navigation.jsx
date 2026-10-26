import {Outlet} from "react-router-dom"
import {Link} from "react-router-dom"
function Navigation(){
    return(
        <div> 
        <nav style={{display:"flex", gap:"10px", backgroundColor:"lightblue", padding:"10px" ,color:"black"}}>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="profile">Profile</Link>
            <Link to="login">Login</Link>
            
        </nav>
        <Outlet />
        </div>
    )

}

export default Navigation