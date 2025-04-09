import React from 'react'
import AboutPara from '../../components/AboutPara/AboutPara'
import AboutWrite from '../../components/AboutWrite/AboutWrite'
import AboutSlider from '../../components/AboutSlider/AboutSlider'
import Hero from '../../components/Hero/Hero'
import AboutAwards from '../../components/AboutAwards/AboutAwards'
import Plans from '../../components/Plans/Plans'


const About = () => {
  return (
    <>
    <div style={{backgroundColor:"#0f0f0f",
    }}>
    <Hero/>
    <AboutPara/>
    <AboutSlider/>
    <AboutWrite/>
    {/* <AboutAwards/> */}
    <Plans/>
    </div>
    </>
  )
}

export default About