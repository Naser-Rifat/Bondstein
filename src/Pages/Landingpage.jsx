import React from 'react'
const Hero = lazy(() => import(".../Componentes/Hero/Hero"));

const LandingPage = () => {
  return (
    <React.Fragment>
      <Hero/>
    </React.Fragment>
  )
}

export default LandingPage
