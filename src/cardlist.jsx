import Card from './card.jsx'
import './card.css'
import Stafflist from './Stafflist.js'

function Cardlist(props) {
  const filterredStaff = Stafflist.filter(function s(staff) {
    return (staff.name.toLowerCase().includes(props.searchS.toLowerCase()))
  })
  return(
    <div id="cont">
      {filterredStaff.map((staff, index) => {
        return (
          <Card
            key={index}
            image={staff.image}
            name={staff.name}
            job={staff.job}
          />
        )
      })}
    </div>
  )
}

export default Cardlist