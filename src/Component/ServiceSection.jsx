import React from 'react'
import ServicePart from './ServiceCart'
import Container from './Container'
import SImg1 from "../assets/Service (1).png"
import SImg2 from "../assets/Service (2).png"
import SImg3 from "../assets/Service (3).png"
import Grid from './Grid'

const ServiceSection = () => {
  return (
    <>
        <Container>
            <Grid  className="justify-center gap-[30px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <ServicePart
                img={SImg1}
                tittle='Home insurance'
                para='Home insurance is a type of insurance policy that provides cover for your home.'
                click='Learn more'
                />
                <ServicePart
                img={SImg2}
                tittle='Life Insurance'
                para='Helping you bridge gaps in your health care coverage during times of transition'
                click='Learn more'
                />
                <ServicePart
                img={SImg3}
                tittle='Car Insurance'
                para='Car insurance is a type of insurance policy that provides cover for your car.'
                click='Learn more'
                />
            </Grid>
        </Container>
    </>
  )
}

export default ServiceSection
