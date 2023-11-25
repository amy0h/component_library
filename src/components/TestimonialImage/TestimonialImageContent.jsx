const TestimonialImageContent = ({ comment, fullName, company, position }) => {
  return (
    <>
      <div className="testimonial-img-content-container">
        <img 
          className="quote-img"
          src='/quote.svg'
          alt='quotation image'>
          </img>
        <p className="comment">{comment}</p>
        <p className="name">{fullName}</p>
        <p className="company">{company}, <span className="position">{position}</span></p>
      </div>
    </>
  )
}

export default TestimonialImageContent