import React from 'react'
import Hero from '../components/hero/hero'
import Navbar from "./components/Navbar";
import About from "./components/About/About";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
    </div>
  )
}
