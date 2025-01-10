import Image from 'next/image'
import { Button, ButtonGroup } from '@nextui-org/button'

const Hero = () => {
  const handleScroll = () => {}

  return (
    <div className=" w-full h-screen bg-[#98c4fc]">
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
    </div>
  )
}

export default Hero
