import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className=" w-full h-auto flex justify-center">
      {/*Content*/}
      <div className="w-[90%] my-[10%] flex">
        <div>
          <h1 className="font-roboto font-[900] text-[50px] text-[#0D378B]">
            Turning Education Into Action
          </h1>

          <div className="w-[90%]">
            <p className=" my-20 font-roboto font-[400px] text-[22px] leading-10">
              At Mentra, we bridge the gap between learning and earning. By
              providing mentorship, real-world experience, and affordable MVP
              development services, we empower graduates and support businesses
              in their growth journey
            </p>

            <p className="text-[#0D378B] my-20 font-roboto font-[600] text-[22px]">
              From Learning to Earning: Where Careers and Ideas Take Shape.
            </p>
          </div>
        </div>
        <Image
          className="m-auto"
          src="/about_img.png"
          alt="A description of the image"
          width={458}
          height={371}
        />
      </div>
    </div>
  )
}

export default About
