import React from 'react';
import './About.css'
import about1 from '../Assets/about1.webp'
import about2 from '../Assets/about2.png'
import $ from 'jquery'

$(function()
{
    $('#vegi-read').on("click",()=>
    {
        $('.read-vegi').toggle(2000)
    })
    $('#fruit-read').on("click",()=>
    {
        $('.read-fruit').toggle(2000)
    })
})

function About(props) {
    return (
        <>
     <div className="about">
        <h1>About Us</h1>
       <div className="about-us1">
      <div className="about-text1">
      <p>Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. <br />
      Eating vegetables every day is important for health. They provide essential vitamins, minerals, and other nutrients, such as antioxidants and fiber.Research consistently shows that people who eat at least five servings of
          <span style={{display:'none'}} className='read-vegi'>
           vegetables a day have the lowest risk of many diseases, including cancer and heart disease.  <br /> Vegetables are full of essential vitamins, minerals, and antioxidants that provide many important health benefits to your body.</span>
            </p>
            <button id='vegi-read'>Read more</button>
      </div>
        <div className="about-img1">
            <img src={about1} alt="" />
        </div>
        </div>

        <div className="about-us2">
        <div className="about-img2">
            <img src={about2} alt="" />
        </div>
         <div className="about-text2">
         <p>Fruit normally means the seed-associated fleshy structures (or produce) of plants that typically are sweet or sour and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries.
            <br />
            Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. <br />
          <span style={{display:'none'}} className='read-fruit'>  Fruits are an important part of a healthy eating pattern and the source of many vital nutrients, including potassium, folate (folic acid), and antioxidants including polyphenols. Fruit such as blueberries, cranberries, strawberries and citrus also contain phytochemicals that are being studied for their added health benefits. </span> 
          </p>
          <button id='fruit-read'>Read more</button>
         </div>
       </div>
       </div>
        
        </>
    );
}

export default About;