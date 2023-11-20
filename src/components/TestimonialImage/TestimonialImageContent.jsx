const TestimonialImageContent = ({ comment, fullName, company, position }) => {
  console.log({ comment, fullName, company, position })
  return (
    <>
      <div className="content-container">
        <p>{comment}</p>
        <p>{fullName}</p>
        <p>{company}, <span>{position}</span></p>
      </div>
    </>
  )
}

export default TestimonialImageContent