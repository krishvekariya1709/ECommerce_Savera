import React from 'react'
import "./Story.css";
import Story1 from "../Assets/Story1.webp";
import Story2 from "../Assets/Story2.webp";
import Story3 from "../Assets/Story3.webp";
import Story4 from "../Assets/Story4.webp";
import Story5 from "../Assets/Story5.webp";
import Story6   from "../Assets/Story6.jpeg";

export default function Story() {
  return (
    <div className='container'>
      <div className="stories">
        <div className='storie'>
          <img src={Story1}alt='Storie'></img>
          <span className="DescStory fw-light fs-6 text-center">Bold Color's</span>
        </div>
        <div className='storie'>
          <img src={Story2} alt='Storie'></img>
          <span className="DescStory fw-light fs-6 text-center">Festive Collection</span>
        </div>
        <div className='storie'>
          <img src={Story3} alt='Storie'></img>
          <span className="DescStory fw-light fs-6 text-center">Straight Fit</span>
        </div>
        <div className='storie'>
          <img src={Story4} alt='Storie'></img>
          <span className="DescStory fw-light fs-6 text-center">Sarees</span>
        </div>
        <div className='storie'>
          <img src={Story5} alt='Storie'></img>
          <span className="DescStory fw-light fs-6 text-center">Cotton set's</span>
        </div>
        <div className='storie'>
          <img src={Story6} alt='Storie'></img>
          <span className="DescStory fw-light fs-6 text-center">Solid Color's</span>
        </div>
      </div>
      
    </div>
  )
}
