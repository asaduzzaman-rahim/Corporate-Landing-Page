import React from 'react'
import Container from './Container'
import Flex from './Flex'
import BeneFitsCart from './BeneFitsCart'

import CardImg1 from "../assets/BenefitCart (1).png"
import CardImg2 from "../assets/BenefitCart (2).png"
import CardImg3 from "../assets/BenefitCart (3).png"
import CardImg4 from "../assets/BenefitCart (4).png"
import CardImg5 from "../assets/BenefitCart (5).png"

const BeneFitsSection = () => {
  return (
    <>
      <Container>
        <div className="grid justify-center items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BeneFitsCart
                img={CardImg1}
                tittle='We’re unbiased'
                para='Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.'
            />
            <BeneFitsCart
                img={CardImg2}
                tittle='We have the best prices'
                para='Our insurance plans offers are priced the same everywhere else. We just make them easier for you to find.'
            />
            <BeneFitsCart
                img={CardImg3}
                tittle='We’re your insurance advocate'
                para='We will deal with the insurance companies for you, even after you’ve bought your plan.'
            />
            <BeneFitsCart
                img={CardImg5}
                tittle='We’re availabe 24/7'
                para='We have your back 24/7 between our online chat function, email and telephone support.'
            />
            <BeneFitsCart
                img={CardImg4}
                tittle='We make insurance simple'
                para='We’re commited to making applying for insurance as simple as can be for our customers.'
            />
        </div>
      </Container>
    </>
  )
}

export default BeneFitsSection
