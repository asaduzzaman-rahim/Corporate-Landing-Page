import React from "react";

const HeadingSection = ({ tittle, heading, para }) => {
  return (
    <>
      <div className="my-10 py-20 text-center">
        <h5 className="text-[16px]  font-bold border-dotted border-b-3 border-black pb-5 w-[262px] mx-auto uppercase !text-[#89D32A] tracking-[3px]">
          {tittle}
        </h5>
        <h2 className="text-[40px] landing-[48px] pt-[30px] pb-[20px] ">
          {heading}
        </h2>
        <p className="w-[602px] text-[16px] leading-[26px] mx-auto">{para}</p>
      </div>
    </>
  );
};

export default HeadingSection;
