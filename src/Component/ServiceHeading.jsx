import React from 'react'
import Container from './Container'
import HeadingSection from './HeadingSection'
import Reveal from '../Animation/Reveal'

const ServiceHeading = () => {
  return (
    <>
    <Container>
      <Reveal>
        <HeadingSection
          tittle="Our Service "
          heading="Insurance made simple for you"
          para="We work with several leading insurance companies to secure insurance coverages tailored to meet your needs."
          />
        </Reveal>
    </Container>      
    </>
  )
}

export default ServiceHeading
