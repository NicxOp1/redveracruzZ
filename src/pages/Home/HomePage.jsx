import React from 'react'
import './HomePage.css'
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import Diputados from '../../components/Diputados/Diputados'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Banner endDate="2024-03-31" displayText="PARA LA CAMPAÑA A GOBERNADOR"/>
        <Diputados />
        <Banner endDate="2024-04-31" displayText="PROXIMAMENTE"/>
    </div>
  )
}

export default HomePage