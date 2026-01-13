import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'
import Reveal from '../Animation/Reveal'

const EmailSubmiteSection = () => {
  return (
    <>
    <Reveal>
        <div className="bg-[#313131] my-[130px] py-[130px] ">
            <Container className="!max-w-[893px] mx-auto text-center">
                <h2 className='text-[40px] !text-white font-[700] leading-[60px] '>Ready To Get Insured? Submit Your Request And Hear Back As Soon As Tomorroe.</h2>
                <div className='flex justify-center items-center gap-[8px] mt-[30px] mb-[20px] mx-auto max-w-[500 '>
                    <input type="email" placeholder='Your Email'
                    className='bg-white rounded-[8px] w-[494px] h-[56px] px-[10px]'
                    />
                    <Button>Get started</Button>
                </div>
                <p className='text-[16px] !text-white max-w-[555px] mx-auto font-[400] leading-[28px] ' >Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
            </Container>      
        </div>
    </Reveal>
    </>
  )
}

export default EmailSubmiteSection
