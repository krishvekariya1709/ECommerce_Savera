import React from 'react';
import "./WatchShop.css";
import Video1 from "../Assets/Video1.mp4";
import Video2 from "../Assets/Video2.mp4";
import Video3 from "../Assets/Video3.mp4";
import Video4 from "../Assets/Video4.mp4";
export default function WatchShop() {
  return (
    <div className='container d-flex flex-column'>
        <div className='title text-center w-100 fs-2'>WATCH AND SHOP</div>
        <div className="reelContainer">
            <div className="reel">
                {/* <video src={Video1} autoPlay controls></video> */}
                <video  autoPlay controls loop>
                  <source className='video-src' src={Video1}></source>
                </video>
                <video  autoPlay controls loop>
                  <source className='video-src'src={Video2}></source>
                </video>
                <video  autoPlay controls loop>
                  <source className='video-src' src={Video3}></source>
                </video>
                <video autoPlay controls loop>
                  <source className='video-src' src={Video4}></source>
                </video>
            </div>
        </div>
      
    </div>
  )
}
