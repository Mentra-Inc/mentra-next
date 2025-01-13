import React from 'react'

const MenuBar = () => {
  return (
    <div className="w-full h-[63px] flex justify-between items-center bg-[#1D5AD5]">
      <div>
        <img
          src="/mentra_logo.png"
          alt="Logo Image"
          style={{ width: '68px' }}
        />
      </div>
      <ul className="flex text-[15px] font-roboto font-[700] text-white">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default MenuBar
