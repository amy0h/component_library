import './TestimonialImage.css'

const TestimonialImage = ({ img, children }) => {
  return (
    <div className='testimonial-img-container'>
      <div className='profile-pic-container'>
        <img
          src={img}
          className='profile-pic'
          alt='testimonial photo'
        />
      </div>
      {children}
    </div>
  );
};

export default TestimonialImage