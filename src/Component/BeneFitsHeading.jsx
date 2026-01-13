import React from 'react'
import Container from './Container'
import HeadingSection from './HeadingSection'
import Reveal from '../Animation/Reveal'


const BeneFitsHeading = () => {
  return (
    <>
    <Container>
      <Reveal>
        <HeadingSection
          tittle="your benefits"
          heading="We’re Your Right Insurance Advocate"
          para="We work with several leading insurance companies to secure insurance coverages tailored to meet your needs."
          />
      </Reveal>
    </Container>  
    </>
  )
}

export default BeneFitsHeading
