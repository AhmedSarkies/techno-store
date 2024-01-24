import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import "./hero.css";

const items = [
  {
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    caption: "Slide 2",
    key: 2,
  },
  {
    caption: "Slide 3",
    key: 3,
  },
];
const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
        className="hero-carousel-item"
      >
        <div className="d-flex justify-content-center align-items-start flex-column p-5">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button>Buy Now</button>
        </div>
      </CarouselItem>
    );
  });

  return (
    <section className="hero">
      <Container className="d-flex align-items-center justify-content-center">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          className="hero-carousel"
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Container>
    </section>
  );
};

export default Hero;
