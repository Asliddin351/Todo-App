import React from 'react'
import Slider from 'react-slick'
import poster1 from '../../assets/1.png'
import poster2 from '../../assets/2.png'
import poster3 from '../../assets/3.png'
import poster4 from '../../assets/4.png'
import poster5 from '../../assets/5.png'

function AboutSlider() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 500,



      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

    return (
        <div>
            <h2> Responsive </h2>
            <Slider {...settings}>
            <div>
                <img src={poster1} alt="1"/>
            </div>
            <div>
                <img src={poster2} alt="2"/>
            </div>
            <div>
                <img src={poster3} alt="3"/>
            </div>
            <div>
                <img src={poster4} alt="4"/>
            </div>
            <div>
                <img src={poster5} alt="5"/>
            </div>

            </Slider>
        </div>
    )
}
export default AboutSlider;