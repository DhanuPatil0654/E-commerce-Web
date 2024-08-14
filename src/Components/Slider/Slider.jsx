import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import Carouselimg from '../../images/slider imgs/overlay-bg.jpg';

import img1 from '../../images/slider imgs/testimonial-2.jpg'
import img2 from '../../images/slider imgs/testimonial-4.jpg'
import img3 from '../../images/slider imgs/image.png'
import { Image } from 'react-bootstrap';

function Slider() {
  const highlightsitem = [
    {
      imgs: img1,
      title: 'First slide label',
      para: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      imgs: img2,
      title: 'Second slide label',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      imgs: img3,
      title: 'Third slide label',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]
  return (
    <>
      <h4 className='text-center fs-3' style={{ letterSpacing: '7px' }}>HIGHLIGHTS PRODUCTS</h4>
      <Carousel slide={false}>
        {
          highlightsitem.map((a) => {
            return (
              <Carousel.Item>
                <ExampleCarouselImage im={Carouselimg} />
                <Carousel.Caption>
                  <Image src={a.imgs} roundedCircle />
                  <h3>{a.title}</h3>
                  <p>{a.para}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
      </Carousel>

    </>
  )
}

export default Slider


