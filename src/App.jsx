import Homepage from "./Route/Homepage"
import AboutPage from "./Route/AboutPage"
// import Contact from "./Route/contact"
import Navigation from "./Route/Navigation"
import {Routes, Route} from "react-router-dom"
import Login from "./Route/login"
import Profile from "./Profile"

function App() {
  return(

 
    <Routes >

         <Route>
      
    </Route>
     <Route path="/" element={<Navigation />} >
      <Route path="/" element={<Homepage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
        </Route>
     

    </Routes>

  )
}

export default App
