import React from "react";
import Flex from "./Flex";
import Container from "./Container";
import Button from "./Button";
import BenarImg from "../assets/Benar-img.png"
import PropAnimation from "../Animation/PropAnimation";

const BenarSection = () => {
  return (
    <>
      <PropAnimation>
        <Container>
          <Flex className="items-center my-[60px] ">
            <div className="mt-[60px]">
              <h1 className="text-[70px] font-bold max-w-[680px] leading-[90px] tracking-[1px]">We Are Ready To Make Your New Life Happier.</h1>
              <p className="text-[20px] max-w-[627px] leading-[36px] mt-[30px] mb-[40px]">We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.</p>
              <Button >Get a consultation</Button>
            </div>
            <div className=" absolute top-35 right-0 hidden lg:block ">
              <img src={BenarImg} alt="Benar Img" />
            </div>
          </Flex>
        </Container>
      </PropAnimation>
    </>
  );
};

export default BenarSection;
