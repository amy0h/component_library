import { colors, bannerTypes, cards, testimonialImg, testimonial } from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from './components/Badge/Badge';
import Banner from './components/Banner/index';
import Card from './components/Card/index';
import TestimonialImage from './components/TestimonialImage/index';
import Testimonial from './components/Testimonial/index';
import './App.css';


function renderBadgeContainer(badgeType, rounded, colors) {
  return (
    <>
      <h3>{badgeType}</h3>
      <div className='badge-container'>
        {colors.map((color, index) => (
          <Badge key={`badge-${index}`} color={color} rounded={rounded}>
            badge
          </Badge>
        ))}
      </div>
    </>
  );
}

function App() {

  return (
    <main>
      <h1>Component Library++</h1>
      <div className='component-container'>
        <h2>Badges</h2>
        {renderBadgeContainer("Pill", true, colors)}
        {renderBadgeContainer("Square", false, colors)}
      </div>

      <div className='component-container'>
        <h2>Banners</h2>
        <div className='banner-container'>
          {bannerTypes.map((type, index) => (
          <Banner key={`banner-${index}`} type={type.type}>
            <Banner.Icon type={type.type}> 
              <FontAwesomeIcon icon={type.icon} />
            </Banner.Icon>
            <Banner.Text title={type.title}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
            </Banner.Text>
          </Banner>
        ))}
        </div>

      </div>
        
      <div className='component-container'>
        <h2>Cards</h2>
        <div className='card-container'>
          {cards.map((card, index) => (
            <Card key={index}>
              <Card.Icon>
                {card.icon()}
              </Card.Icon>
              <Card.Text
                title={card.title}
                content={card.content}>
              </Card.Text>
            </Card>
          ))}
        </div>
      </div>

      <div className='component-container'>
        <TestimonialImage
          img={testimonialImg.img}>
          <TestimonialImage.Content
            comment={testimonialImg.comment}
            fullName={testimonialImg.fullName}
            company={testimonialImg.company}
            position={testimonialImg.position}>
          </TestimonialImage.Content>
        </TestimonialImage>
      </div>


      <div className='component-container'>
        <Testimonial>
          <Testimonial.Content
            comment={testimonial.comment}
            fullName={testimonial.fullName}
            company={testimonial.company}
            position={testimonial.position}>
          </Testimonial.Content>
        </Testimonial>
      </div>
      
    </main>
  );
}



export default App
