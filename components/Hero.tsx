import Image from 'next/image'
import { Button, ButtonGroup } from '@nextui-org/button'

const Hero = () => {
  const handleScroll = () => {}

  return (
    <div className="w-full h-screen bg-[#98c4fc]" id="home">
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
      </div>

      <WaveDivider />
    </div>
  )
}

const WaveDivider = () => {
  return (
    <div className="custom-shape-divider-bottom-1738675425">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
    </div>
  )
}

export default Hero
