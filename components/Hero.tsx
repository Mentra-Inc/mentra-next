import Image from 'next/image'
import { Button, ButtonGroup } from '@nextui-org/button'
import MenuBar from './MenuBar'

const Hero = () => {
  const handleScroll = () => {}

  return (
    <div className=" w-full h-screen ">
      <MenuBar />
      {/*Hero*/}
      <div className="max-w-[1440px] mx-auto px-8 flex flex-row justify-center items-center h-screen">
        <Image
          className="w-[494px] h-[442px] mx-[10%]"
          src="/hero_img.png"
          alt="A description of the image"
          width={494}
          height={442}
        />
        <div className="flex flex-col">
          <h1 className=" w-[595px] h-[220px] flex  text-[#0D378B] text-[50px] font-roboto font-[900] ">
            Empowering Graduates. Supporting Businesses. Transforming Careers.
          </h1>

          <h2 className="my-[10%] text-[#0D378B] text-2xl not-italic font-semibold leading-[normal] font-roboto">
            From Learning to Earning: Mentra bridges the gap between academic
            knowledge and real-world success.
          </h2>

          <div className="flex flex-row-auto items-center justify-between">
            <Button className="btn-custom">Start Your Journey</Button>
            <Button className="btn-custom">Build Your MVP Today</Button>
          </div>
        </div>
        <svg
          className="absolute -z-10"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="120%"
          viewBox="0 0 1440 991"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            opacity="0.6"
            d="M0 919.326V0H1440V991C1389.01 887.931 1160.51 781.901 1009.46 919.326C858.403 1056.75 744.563 952.105 672.077 919.326C593.482 883.785 481.534 761.169 341.597 919.326C229.649 1045.85 67.2204 972.045 0 919.326Z"
            fill="#4B9DFE"
          />
        </svg>
      </div>
    </div>
  )
}

export default Hero
