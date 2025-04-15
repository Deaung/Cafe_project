import { useState} from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Slideimg.css'

import images from "./centerimgs";

const renderSlides = images.map(image => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
  </div>
));

const SlideImg = () => {

const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="slideimg">
        <Carousel
          className="slideimg-1"
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={images[currentIndex]}
          onChange={handleChange}>
          {renderSlides}
        </Carousel>
    </div>
  );
};

export default SlideImg;