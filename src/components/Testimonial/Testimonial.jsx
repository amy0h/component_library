import './Testimonial.css'

const Testimonial = ({ children }) => {
  return (
    <div className='testimonial-container'>
      <div className='image-container'>
        <img
          src='./logo.svg'
          className='logo'
          alt='logo'
        />
      </div>
      {children}
    </div>
  );
};

export default Testimonial