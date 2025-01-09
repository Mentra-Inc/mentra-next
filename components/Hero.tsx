import Image from 'next/image'

const Hero = () => {
  return (
    <div className=" w-full h-screen bg-[#4B9DFE]">
      {/*Hero*/}
      <div className="max-w-[1440px] mx-auto px-8 flex flex-row justify-center items-center h-[991px]">
        <Image
          className="w-[494px] h-[442px] mx-[10%]"
          src="/hero_img.png"
          alt="A description of the image"
          width={494}
          height={442}
        />
        <h1 className=" w-[595px] h-[179px] flex flex-shrink-0 text-[#0D378B] text-[50px] font-roboto font-[900] ">
          Empowering Graduates. Supporting Businesses. Transforming Careers.
        </h1>
      </div>
    </div>
  )
}

export default Hero
