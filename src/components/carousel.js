//Imports
import ResponsiveGallery from 'react-responsive-gallery';
import * as React from 'react';
import './carousel.css';

//Carousel Component
function Carousel() {
    return (
    <div class="carousel">
      <ResponsiveGallery
        useLightBox
        images={[
          {
            src: require('../Images/Website1.jpeg'),
            alt: 'Ocean Coast',
            orderS: 1,
            orderM: 1,
            orderL: 1,
          },
          {
            src: require('../Images/Website2.jpeg'),
            alt: 'Rocky Shoreline with Trees',
            orderS: 2,
            orderM: 2,
            orderL: 2,
          },
          {
            src: require('../Images/Website3.jpeg'),
            alt: 'Cliff Face',
            orderS: 3,
            orderM: 3,
            orderL: 3,
          },
          {
            src: require('../Images/Website4.jpeg'),
            alt: 'Dramatic Clouds over Lake',
            orderS: 4,
            orderM: 4,
            orderL: 4,
          },
          {
            src: require('../Images/Website5.jpeg'),
            alt: 'Exposed Tree Roots',
            orderS: 5,
            orderM: 5,
            orderL: 5,
          },
          {
            src: require('../Images/Website6.jpeg'),
            alt: 'Rocky Ocean Shoreline',
            orderS: 6,
            orderM: 6,
            orderL: 6,
          },
          {
            src: require('../Images/Website7.jpeg'),
            alt: 'Grand Prismatic Spring',
            orderS: 7,
            orderM: 7,
            orderL: 7,
          },
          {
            src: require('../Images/Website8.jpeg'),
            alt: 'Stream and Waterfalls in Gorge',
            orderS: 8,
            orderM: 8,
            orderL: 8,
          },
          {
            src: require('../Images/Website9.jpeg'),
            alt: 'Fast Moving Stream with Rocks',
            orderS: 9,
            orderM: 9,
            orderL: 9,
          },
          {
            src: require('../Images/Website10.jpeg'),
            alt: 'Stream and Waterfalls in Gorge',
            orderS: 10,
            orderM: 10,
            orderL: 10,
          },
          {
            src: require('../Images/Website11.jpeg'),
            alt: 'Slow and Narrow Waterfall',
            orderS: 11,
            orderM: 11,
            orderL: 11,
          },
          {
            src: require('../Images/Website12.jpeg'),
            alt: 'Misty Canyon Trail',
            orderS: 12,
            orderM: 12,
            orderL: 12,
          },
          {
            src: require('../Images/Website13.jpeg'),
            alt: 'Running Eagle Falls',
            orderS: 13,
            orderM: 13,
            orderL: 13,
          },
          {
            src: require('../Images/Website14.jpeg'),
            alt: 'Dark and Empty Waterfall',
            orderS: 14,
            orderM: 14,
            orderL: 14,
          },
          {
            src: require('../Images/Website15.jpeg'),
            alt: 'Sweeping Tree Roots',
            orderS: 15,
            orderM: 15,
            orderL: 15,
          },
          {
            src: require('../Images/Website16.jpeg'),
            alt: 'Otter Cliffs and Ocean',
            orderS: 16,
            orderM: 16,
            orderL: 16,
          },
          {
            src: require('../Images/Website17.jpeg'),
            alt: 'Fallen Trees on Waterfall',
            orderS: 17,
            orderM: 17,
            orderL: 17,
          },
          {
            src: require('../Images/Website18.jpeg'),
            alt: 'Snowcapped Mountain Peak',
            orderS: 18,
            orderM: 18,
            orderL: 18,
          },
          {
            src: require('../Images/Website19.jpeg'),
            alt: 'Fallen Trees on Waterfall',
            orderS: 19,
            orderM: 19,
            orderL: 19,
          },
          {
            src: require('../Images/Website20.jpeg'),
            alt: 'Great Sand Dunes and Mountains',
            orderS: 20,
            orderM: 20,
            orderL: 20,
          },
          {
            src: require('../Images/Website21.jpeg'),
            alt: 'Rocky Cliff Face',
            orderS: 21,
            orderM: 21,
            orderL: 21,
          },
          {
            src: require('../Images/Website22.jpeg'),
            alt: 'Trickling Waterfall',
            orderS: 22,
            orderM: 22,
            orderL: 22,
          },
          {
            src: require('../Images/Website23.jpeg'),
              alt: 'Slow-moving Stream with Mountains',
              orderS: 23,
              orderM: 23,
              orderL: 23,
          },
          {
            src: require('../Images/Website24.jpeg'),
            alt: 'Rushing Water over Rocks',
            orderS: 24,
            orderM: 24,
            orderL: 24,
          },
          {
            src: require('../Images/Website25.jpeg'),
            alt: 'Rocky Mountainside from the Air',
            orderS: 25,
            orderM: 25,
            orderL: 25,
          }
        ]}
      />
    </div>
    );
}

export default Carousel;