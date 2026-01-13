import React from 'react'
import Container from './Container'
import HeadingSection from './HeadingSection'
import Reveal from '../Animation/Reveal'

const TestimonialHeading = () => {
  return (
    <>
    <Container>
      <Reveal>
        <HeadingSection
            tittle="testimonial"
            heading="What Our Customer Have To Says"
            para="We share common trends, strategies ideas, Opinion, short & log stories from the team behind company"
            />
        </Reveal>
    </Container>
      
    </>
  )
}

export default TestimonialHeading
