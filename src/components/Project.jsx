import React from 'react'
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Projcard from './Projcard'
import sorting from '../assets/sorting.png'
import musicplayer from "../assets/musicplayer.png"
import xcrypto from "../assets/xcrypto.png"
import netflix from "../assets/netflix.png"
import dailygoals from "../assets/dailygoals.png"
import weather from "../assets/weather.png"

import portfolio_website_img from "../assets/portfolio_website_img.png"
export default function Project() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
  return (
    <div className='project'>
      <h1 className='heading'>Projects</h1>
      <hr  className='hrule'/>
      <div className='projcards'>
      
      
      <Projcard
      description="XCrypto"
      img= {xcrypto}
      duration="A user-friendly web application using Chakra UI and React, providing real-time insights and data on various cryptocurrencies; enhanced user experience, driving increased engagement and informed investment decisions."
      gitlink="https://github.com/Lovepratap8936/Crypto-App"
      live="https://crypto-app-gbo9.vercel.app/"
      />
      <Projcard
      description="Sorting Visualizer"
      img= {sorting}
      duration="An interactive web application utilizing JavaScript to visually illustrate the step-by-step execution of various sorting algorithms"
      gitlink="https://github.com/Lovepratap8936/sorting-visualizer"
      live="https://sorting-visualizer-bice-six.vercel.app/"
      />
      <Projcard
      description="Music Player"
      img= {musicplayer}
      duration="A sleek and user-friendly music player website, thoughtfully designed using HTML, CSS and javascript. "
      gitlink="https://github.com/Lovepratap8936/music-player"
      live="https://music-player-ten-brown.vercel.app/"
      />
      
        <Projcard
      description="Netflix-Clone"
      img= {netflix}
      duration="A web app built using React Js and Axios that demonstrates the frontend of the famous Netflix website."
      gitlink="https://netflix-clone-sable-three-23.vercel.app/"
      live="https://github.com/Lovepratap8936/Netflix-clone"
      />
        <Projcard
      description="Daily Goals"
      img= {dailygoals}
      duration="A website built using HTML, CSS and Javascript that lets you store your daily goals and edit them with help of local storage."
      gitlink="https://github.com/Lovepratap8936/Daily-Goals"
      live="https://daily-goals-drab.vercel.app/"
      />
        <Projcard
      description="Weather App"
      img= {weather}
      duration="Wether app provides you the exact weather data of a location using weather api. It is built using HTML, CSS and Javascript."
      gitlink="https://github.com/Lovepratap8936/Weather-application"
      live="https://weather-application-six-livid.vercel.app/"
      />
      
      
      
      </div>
    </div>
  )
}
