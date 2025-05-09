import React, { useState } from 'react';
import './Carousel.scss';

type Image = {
  src: string;
  alt: number;
};

type Props = {
  images: Image[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
};

enum Direction {
  right = 1,
  left = -1,
}

const Carousel: React.FC<Props> = ({
  images,
  step,
  frameSize,
  itemWidth,
  animationDuration,
  infinite,
}) => {
  const [itemWidthState, setItemWidthState] = useState(itemWidth);
  const [frameSizeState, setFrameSizeState] = useState(frameSize);
  const [stepState, setStepState] = useState(step);
  const [animationDurationState, setAnimationDurationState] =
    useState(animationDuration);

  function carouselScroll(direction: Direction) {}

  return (
    <div className="Carousel">
      <ul className="Carousel__list">
        <div
          className="container-short"
          style={{
            width: `${itemWidthState * frameSizeState}px`,
          }}
        >
          <div
            className="container-tall"
            style={{
              width: `${itemWidthState * images.length}px`,
              transition: `all ${animationDurationState}ms`,
              transform: `translate(${itemWidthState * -step}px)`,
            }}
          >
            {images.map(image => (
              <li key={image.alt}>
                <img
                  src={image.src}
                  alt={String(image.alt)}
                  style={{
                    width: `${itemWidthState}px`,
                  }}
                />
              </li>
            ))}
          </div>
        </div>
      </ul>

      <button type="button">Prev</button>
      <button type="button">Next</button>
    </div>
  );
};

export default Carousel;
