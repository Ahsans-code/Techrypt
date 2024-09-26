import React from 'react'
import Hero from '../../components/Hero/Hero'
import Payment from '../../components/Payment/Payment'
import Services from '../../components/Services/Services'
import Design from '../../components/Design/Design'
import Awards from '../../components/Awards/Awards'

const performance = () => {
  return (
    <div style={{background:"#0f0f0f"}}>
      
    <Hero  />
    <Payment/>
    <Services/>
    <Design/>
    <Awards/>
    </div>
  )
}

export default performance