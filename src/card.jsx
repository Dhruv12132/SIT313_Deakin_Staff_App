
function Card(props) {
  return (
    <div className="row">
      <img src={props.image} alt="staff" style={{ width: '100px', height: '100px' }}/>
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  )
}

export default Card