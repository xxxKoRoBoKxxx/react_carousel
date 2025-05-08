import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

type Image = {
  src: string;
  alt: number;
};

interface State {
  images: Image[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      {
        src: './img/1.png',
        alt: 1,
      },
      {
        src: './img/2.png',
        alt: 2,
      },
      {
        src: './img/3.png',
        alt: 3,
      },
      {
        src: './img/4.png',
        alt: 4,
      },
      {
        src: './img/5.png',
        alt: 5,
      },
      {
        src: './img/6.png',
        alt: 6,
      },
      {
        src: './img/7.png',
        alt: 7,
      },
      {
        src: './img/8.png',
        alt: 8,
      },
      {
        src: './img/9.png',
        alt: 9,
      },
      {
        src: './img/10.png',
        alt: 10,
      },
    ],
    step: 3,
    frameSize: 3,
    itemWidth: 130,
    animationDuration: 1000,
    infinite: false,
  };

  render() {
    const { images, step, frameSize, itemWidth, animationDuration, infinite } =
      this.state;

    return (
      <div className="App">
        <h1>Carousel with {images.length} images</h1>

        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          itemWidth={itemWidth}
          animationDuration={animationDuration}
          infinite={infinite}
        />
      </div>
    );
  }
}

export default App;
