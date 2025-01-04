import React from 'react';
import './Home.css'
import front_img from '../Assets/background.jpg'
import { Link } from 'react-router-dom';
import About from '../About/About';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import fruitData from '../Fruits/AllFruitData';
import vegiData from '../Vegetable/AllVegiData';
import Service from '../Services/Service';

function Home(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1440 },
          items: 4
        },
        laptop: {
            breakpoint: { max: 1440, min: 1024 },
            items: 3
          },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <>
        {/* front */}
        <div className="front-section">
            <div className="front-text">
            <h1 className='font-bold'> Welcome to <br/> Our VegiFruit Shop </h1>
            <p>Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.
            Fruit normally means the seed-associated fleshy structures (or produce) of plants that typically are sweet or sour and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries.</p>
             <Link to=''><button>Shop Now</button></Link>
            </div>
            <div className="front-img">
            <img src={front_img} alt="" />
            </div>
        </div>
        <Service/>
        <About/>
        {/* Fruit */}
        <div className="fruit">
            <h1 className='heading font-bold text-[35px] md:text-[50px] '>Fruits</h1>
            <Carousel responsive={responsive}>
                {fruitData.map((val,ind)=>
                  <div className="fruit-item" key={ind}>
                    <img src={val.img} alt="" />
                    <p className='fruit-name'>{val.name}</p>
                    <p className='fruit-price'>Price : {val.price}</p>
                    <button onClick={()=>props.addToCartHandler({name:val.name,img:val.img,price:val.price})}>Add to Cart</button>
                  </div>
                )}
            </Carousel>
            <Link to='/fruit' className='see-all'>See all</Link>
        </div>
        {/* vegi */}
        <div className="vegi">
            <h1 className='heading font-bold text-[35px] md:text-[50px]'>Vegetables</h1>
            <Carousel responsive={responsive}>
                {vegiData.map((val,ind)=>
                  <div className="vegi-item" key={ind}>
                    <img src={val.img} alt="" />
                    <p className='vegi-name'>{val.name}</p>
                    <p className='vegi-price'>Price : {val.price}</p>
                    <button onClick={()=>props.addToCartHandler({name:val.name,img:val.img,price:val.price})}>Add to Cart</button>
                  </div>
                )}
            </Carousel>
            <Link to='/Vegetable' className='see-all'>See all</Link>
        </div>
        </>
    );
}

export default Home;