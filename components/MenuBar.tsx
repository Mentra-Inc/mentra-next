import React from 'react'

const MenuBar = () => {
  return (
    <div className="w-full h-[63px] flex justify-between items-center bg-[#1D5AD5] px-20">
      <div>
        <img
          src="/mentra_logo.png"
          alt="Logo Image"
          style={{ width: '68px' }}
        />
      </div>
      <ul className="flex text-[15px] font-roboto font-[700] text-white w-1/4 justify-between">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar
