import React from 'react'
import Container from './Container'
import Flex from './Flex'
import TestimonialCart from './TestimonialCart'
import Slider from "react-slick";

import Clint1 from "../assets/Clint1.png"
import Clint2 from "../assets/Clint2.png"
import Clint3 from "../assets/Clint3.png"
import Reveal from '../Animation/Reveal';

function TestimonialSectionCart() {

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 3000,
//     autoplaySpeed: 3000,
//     cssEase: "linear"
//   };

  return (
    <Container>
            <Flex>
                <TestimonialCart
                    ClintTittle="I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality."
                    ClintPhoto={Clint1}
                    ClintName="Viola Manisa"
                    Customer="Verified customer"
                />
                <TestimonialCart
                    ClintTittle="I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality."
                    ClintPhoto={Clint2}
                    ClintName="Viola Manisa"
                    Customer="Verified customer"
                />
                <TestimonialCart
                    ClintTittle="I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality."
                    ClintPhoto={Clint3}
                    ClintName="Viola Manisa"
                    Customer="Verified customer"
                />
            </Flex>
    </Container>
  );
}

export default TestimonialSectionCart;
