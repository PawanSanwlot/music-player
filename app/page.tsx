'use client'
import { IoChevronBackOutline } from "react-icons/io5";
import { LuListMusic } from "react-icons/lu";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { PiShuffleSimpleLight, PiShuffleSimpleBold } from "react-icons/pi";
import { RiRepeat2Fill, RiRepeatOneFill } from "react-icons/ri";
import { TbPlaylist, TbTrashX, TbPlayerSkipForwardFilled, TbPlayerPause, TbPlayerSkipBackFilled, TbPlayerPlay } from "react-icons/tb";
import { useState } from "react";

export default function Home() {
  // let showSongsList = false
  const [songs, setSongs] = useState([{
    id: 1,
    title: "I Like How It Feels",
    artist: "(feat. Pitbull) - Enrique Iglesias",
    isFav: false,
    isActive: false,
  },

  {
    id: 2,
    title: "Meteor Shower",
    artist: "Owl City",
    isFav: false,
    isActive: false,
  },

  {
    id: 3,
    title: "Paper planes",
    artist: "M.I.A",
    isFav: false,
    isActive: false,
  },
  {
    id: 4,
    title: "Pehli Baar - Dil Dhadakne Do",
    artist: "Shankar Ehsaan Loy",
    isFav: false,
    isActive: false,
  },
  {
    id: 5,
    title: "Play Hard ",
    artist: "(feat. Ne-Yo & Akon)",
    isFav: false,
    isActive: false,
  }
  ])
  const [showSongsList, setShowSongsList] = useState(false)
  const [playBtn, setPlayBtn] = useState(false)
  const [favBtn, setfavBtn] = useState(false)
  const [reapeatBtn, setrepeatBtn] = useState(false)
  const [shuffleBtn, setShuffleBtn] = useState(false)
  function handleClick() {
    setShowSongsList(!showSongsList)
  }
  function handlePlayBtnClick() {
    setPlayBtn(!playBtn)
  }
  function handleFavClick() {
    setfavBtn(!favBtn)
  }
  function handleRepeatBtnClick(){
    setrepeatBtn(!reapeatBtn)
  }
  function handleShuffleBtnClick(){
    setShuffleBtn(!shuffleBtn)
  }
  return (
    <main className="flex justify-center items-center gap-40 p-5">
      <div className="w-[320px] ">
        {/* left section */}
        <div>
          <h1 className="text-center text-3xl font-bold  ">Music Player</h1>
        </div>
        
        <div className="flex justify-between items-center mt-2" >

          <p className="font-semibold tracking-wide ">Playing now</p>
          <div>
            <LuListMusic onClick={handleClick} className="cursor-pointer" />
          </div>
        </div>

        <div>
          <img className="size-80 mx-auto mt-2 rounded-xl" src="https://cdn.aniplaylist.com/thumbnails/1d9ca092e92612004bd5feedf54980a16dc4557c.JPG" alt="album cover" />
        </div>

        <div className="flex justify-between mt-3 ">
          <div >
            <h3 className="font-extrabold text-xl text-white">Abyss</h3>
            <p className="text-slate-900 font-medium">Youngblud</p>
          </div>
          <div className="cursor-pointer" onClick={handleFavClick}>{favBtn ? <FaHeart /> : <FaRegHeart />}</div>
        </div>

        <div className="flex justify-self-center flex-col mt-3 ">

          <input className="w-80 " type="range" min={0} max={100} />

          <div className="flex justify-between ">
            <p>1:29</p>
            <p>3:00</p>
          </div>
        </div>

        <div className="flex justify-between text-3xl mt-3 ">
          <div className="cursor-pointer" onClick={handleShuffleBtnClick}>{shuffleBtn ?<PiShuffleSimpleBold/>: <PiShuffleSimpleLight/>}</div>
          <TbPlayerSkipBackFilled />
          <div className="cursor-pointer" onClick={handlePlayBtnClick}>{playBtn ? <TbPlayerPause /> : <TbPlayerPlay />}</div>

          <TbPlayerSkipForwardFilled />
          <div className="cursor-pointer" onClick={handleRepeatBtnClick}>{reapeatBtn ?<RiRepeatOneFill/>: <RiRepeat2Fill />}</div>
        </div>
      </div>

      {/* right section */}
      {showSongsList && <div className="min-w-[320px]">
        <div className="text-3xl"><TbPlaylist /></div>
        <div className="content-around">
          {
            songs?.map(song => <p key={song.id} className="flex justify-between items-center font-semibold text-slate-800 cursor-pointer">
              <span>{song.title}</span>
              <TbTrashX />
            </p>)
          }
        </div>
      </div>}

    </main>
  );
}
