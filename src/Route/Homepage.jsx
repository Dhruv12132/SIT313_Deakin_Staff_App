import { useState } from 'react'
import Header from '../header.jsx'
import '../header.css'
import Cardlist from '../cardlist.jsx'
function Homepage(){
    let [searchTerm, setsearch] = useState("")
  
  function handleInput(event){
  let value = event.target.value;
  setsearch(value)
  
  }
  return (
    <>
      <Header heading="Staff List" />
      <Header heading="SIT 313" />
<br></br>
      <input onChange = {handleInput} type = "text" placeholder = "Search Staff" style={{padding:"10px", margin:"10px", width: "100%" , boxSizing: "border-box", }}/>
      <Cardlist
      searchS = {searchTerm} />
    </>
  )

}

export default Homepage
