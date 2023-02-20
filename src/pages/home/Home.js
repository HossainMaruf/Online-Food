import React from 'react'
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Topbar from './components/topbar/Topbar';

// components

function Home() {
  return (
    <div>
        <Topbar/>
        <Header />
        <Slider />
    </div>
  )
}
export default Home;