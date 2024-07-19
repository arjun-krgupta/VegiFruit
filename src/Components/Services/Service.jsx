import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import serv1 from '../Assets/serv1.png'
import serv2 from '../Assets/serv2.png'
import serv3 from '../Assets/serv3.png'
import serv4 from '../Assets/serv4.png'

function Service(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1440 },
          items: 1
        },
        laptop: {
            breakpoint: { max: 1440, min: 1024 },
            items: 1
          },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <>
         <div className="service">
            <h1 className='text-[35px] font-bold text-center mt-5 mb-10 md:text-[50px]'>Services</h1>
            <Carousel responsive={responsive}>
        <div className='w-full'>
          <img src={serv1} alt="" className='max-w-100 h-auto' />
          </div>
          <div className='w-full'>
          <img src={serv2} alt="" className='max-w-100 h-auto' />
          </div>
          <div className='w-full'>
          <img src={serv3} alt="" className='max-w-100 h-auto' />
          </div>
          <div className='w-full'>
          <img src={serv4} alt="" className='max-w-100 h-auto' />
          </div>
          </Carousel>
        </div>

        </>
    );
}

export default Service;