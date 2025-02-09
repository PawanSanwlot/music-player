import Image from "next/image";
import { IoChevronBackOutline } from "react-icons/io5";
import { LuListMusic } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { PiShuffleSimpleLight } from "react-icons/pi";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { TbPlayerPause } from "react-icons/tb";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { RiRepeat2Fill } from "react-icons/ri";





export default function Home() {
  return (
  <main>
    <div className="w-[320px] border">
      {/* left section */}
      <div>
        <h1 className="text-center mt-24 ">Music Player</h1>
      </div>

      <div className="flex justify-self-center space-x-24 mt-3" >
        <IoChevronBackOutline />
        <p>Playing now</p>
        <LuListMusic />
      </div>

      <div>
        <img className="size-80 mx-auto mt-2 rounded-xl" src="https://cdn.aniplaylist.com/thumbnails/1d9ca092e92612004bd5feedf54980a16dc4557c.JPG" alt="album cover" />
      </div>

      <div className="flex justify-between mt-3 ">
      <div >  
        <h3 className="font-bold text-xl">Abyss</h3>
        <p className="text-slate-300 font-medium">Youngblud</p>
      </div>
        <FaRegHeart />
      </div>

      <div className="flex justify-self-center flex-col mt-3 ">
        
        <input className="w-80 " type="range" min={0} max={100}/>
  
        <div className="flex justify-between ">
          <p>1:29</p>
          <p>3:00</p>
        </div>
      </div>

      <div className="flex justify-between text-xl mt-3 ">
       <PiShuffleSimpleLight />
       <TbPlayerSkipBackFilled />
       <TbPlayerPause />
       <TbPlayerSkipForwardFilled />
       <RiRepeat2Fill />
      </div>
    </div>

    
    <div>
      {/* right section */}

    </div>

  </main>
  );
}
