import React from 'react'
import Container from './Container'
import HeadingSection from './HeadingSection'
import Reveal from '../Animation/Reveal'

const TipsHeading = () => {
  return (
    <>
    <Container>
      <Reveal>
        <HeadingSection
            tittle="our tips for you"
            heading="Reinventing Your Protection"
            para="We share common trends, strategies ideas, opinion, short & log stories from the team behind company"
            />    
      </Reveal>
    </Container>      
    </>
  )
}

export default TipsHeading
