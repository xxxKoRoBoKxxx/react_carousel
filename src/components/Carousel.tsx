import React from 'react';
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

const Carousel: React.FC<Props> = ({
  images,
  step,
  frameSize,
  itemWidth,
  animationDuration,
  infinite,
}) => {
  return (
    <div className="Carousel">
      <ul className="Carousel__list">
        <div className="container-short">
          <div className="container-tall">
            {images.map(image => (
              <li key={image.alt}>
                <img src={image.src} alt={String(image.alt)} />
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
