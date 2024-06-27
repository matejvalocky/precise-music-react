// OBECNE CSS
import "./Content.css";
import Slideshows from "../components/Slideshows";

// KONKRETNE CSS
import "./MainContent.css";
const MainContent = () => {
  return (
    <div className="fullFrame">
      <div className="mainHeadingSlideshow">
        <Slideshows/>
      </div>
    </div>
  );
};

export default MainContent;
