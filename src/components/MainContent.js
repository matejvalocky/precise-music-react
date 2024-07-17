// OBECNE CSS
import "./Content.css";
import Slideshows from "../components/Slideshows";

// REACT SPRING - ANIMATION
import { useSpring, animated } from '@react-spring/web';


// KONKRETNE CSS
import "./MainContent.css";
const MainContent = () => {

  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    backgroundColor: '#f0f0f0',
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
      backgroundColor: '#ffffff',
    },
    config: { tension: 170, friction: 26 },
  });

  return <animated.div style={props}>
        <div className="fullFrame">
      <div className="mainHeadingSlideshow">
        <Slideshows/>
      </div>
    </div>
  </animated.div>

  
};

export default MainContent;
