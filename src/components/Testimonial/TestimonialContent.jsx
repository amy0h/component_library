const TestimonialContent = ({ comment, fullName, company, position }) => {
    return (
      <>
        <div className="testimonial-content-container">
          <img 
            className="quote-img"
            src='/quote.svg'
            alt='quotation image'>
            </img>
        <p className="comment">{comment}</p>
        <div className="details-mobile">
            <p className="name">{fullName}</p>
            <p className="company">
            {company}, <span className="position">{position}</span>
            </p>
        </div>
        <div className="details">
            <span className="name">{fullName}</span>
            <span className="slash"> / </span>
            <span className="company">
            {company}, <span className="position">{position}</span>
            </span>
        </div>

        </div>
      </>
    )
  }
  
  export default TestimonialContent