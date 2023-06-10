import logo from "../assets/Images/Logo.svg"

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";
import { useState } from "react";
const Header = () => {
    const [toggle, setToggle]=useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  
  return (
    <div className='flex items-center justify-between p-5'>
    <div className='flex  gap-8 items-center'>
    <img src={logo} className='w-[40px] 
    md:w-[65px] object-cover' />

    <div className='hidden md:flex gap-8'>
    {menu.map((item)=>(
        <HeaderItems key={item} name={item.name} Icon={item.icon} />
    ))}
    </div>

      <div className='flex md:hidden gap-5'>
    {menu.map((item,index)=>index<3&&(
        <HeaderItems key={index} name={''} Icon={item.icon} />
    ))}
    
     <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
        <HeaderItems name={''} Icon={HiDotsVertical} />
        {toggle? <div className='absolute mt-3 bg-[#121212] 
        border-[1px] border-gray-700 p-3 px-5 py-4'>
        {menu.map((item,index)=>index>2&&(
        <HeaderItems key={item} name={item.name} Icon={item.icon} />
        ))}
        </div>:null}
        </div> 
    </div>
    </div>
    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png"
    className='w-[40px] rounded-full'/>
</div>
  );
};

export default Header;
