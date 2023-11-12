const CardText = ({ title, content}) => {
  return (
    <div className="card-text">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default CardText