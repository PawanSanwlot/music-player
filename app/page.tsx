"use client";

import { LuListMusic } from "react-icons/lu";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { PiShuffleSimpleLight, PiShuffleSimpleBold } from "react-icons/pi";
import { RiRepeat2Fill, RiRepeatOneFill } from "react-icons/ri";
import {
	TbPlaylist,
	TbTrashX,
	TbPlayerSkipForwardFilled,
	TbPlayerPause,
	TbPlayerSkipBackFilled,
	TbPlayerPlay,
	TbPlayerPlayFilled,
} from "react-icons/tb";
import { useState, useRef } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});

export default function Home() {
	const [songs, setSongs] = useState([
		{
			id: 1,
			title: "I Like How It Feels",
			artist: "(feat. Pitbull) - Enrique Iglesias",
			isFav: false,
			isActive: false,
			src: "I Like How It Feels (feat. Pitbull & The - Enrique Iglesias",
		},

		{
			id: 2,
			title: "Meteor Shower",
			artist: "Owl City",
			isFav: false,
			isActive: false,
			src: "Owl City - Meteor Shower",
		},

		{
			id: 3,
			title: "Paper planes",
			artist: "M.I.A",
			isFav: false,
			isActive: false,
			src: "Paper planes",
		},
		{
			id: 4,
			title: "Pehli Baar - Dil Dhadakne Do",
			artist: "Shankar Ehsaan Loy",
			isFav: false,
			isActive: false,
			src: "Pehli Baar - Dil Dhadakne Do",
		},
		{
			id: 5,
			title: "Play Hard ",
			artist: "(feat. Ne-Yo & Akon)",
			isFav: false,
			isActive: false,
			src: "Play Hard (feat. Ne-Yo & Akon)",
		},
	]);
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const audioRef = useRef(null);

	const playSong = () => {
		audioRef?.current.play();
	};

	const pauseSong = () => {
		audioRef?.current.pause();
	};

	const [showSongsList, setShowSongsList] = useState(false);
	const [playBtn, setPlayBtn] = useState(false);
	const [favBtn, setfavBtn] = useState(false);
	const [reapeatBtn, setrepeatBtn] = useState(false);
	const [shuffleBtn, setShuffleBtn] = useState(false);
	function handleClick() {
		setShowSongsList(!showSongsList);
	}
	function handlePlayBtnClick() {
		setPlayBtn(!playBtn);
	}
	function handleFavClick() {
		setfavBtn(!favBtn);
	}
	function handleRepeatBtnClick() {
		setrepeatBtn(!reapeatBtn);
	}
	function handleShuffleBtnClick() {
		setShuffleBtn(!shuffleBtn);
	}
	return (
		<main className="flex justify-center items-center gap-40 p-5">
			<audio ref={audioRef} src={`/songs/${currentSong.src}.mp3`}></audio>
			<div className="w-[320px] ">
				{/* left section */}
				<div>
					<h1
						className={`text-center text-3xl font-bold tracking-wide ${poppins.className}`}
					>
						Music Player
					</h1>
				</div>

				<div className="flex justify-between items-center mt-2">
					<p className="font-semibold tracking-wide ">Playing now</p>
					<div>
						<LuListMusic
							title="Play List"
							onClick={handleClick}
							className="cursor-pointer"
						/>
					</div>
				</div>

				<div>
					<img
						className="size-80 mx-auto mt-2 rounded-xl"
						src="https://cdn.aniplaylist.com/thumbnails/1d9ca092e92612004bd5feedf54980a16dc4557c.JPG"
						alt="album cover"
					/>
				</div>

				<div className="flex justify-between mt-3 ">
					<div>
						<h3
							style={{
								textShadow: "1px 1px 2px black",
							}}
							className={`font-extrabold text-xl text-white ${poppins.className}`}
						>
							Abyss
						</h3>
						<p className="text-slate-900 font-medium">Youngblud</p>
					</div>
					<div
						className="cursor-pointer text-xl transition-all duration-500 active:scale-150"
						onClick={handleFavClick}
					>
						{favBtn ? <FaHeart title="Disike" /> : <FaRegHeart title="Like" />}
					</div>
				</div>

				<div className="flex justify-self-center flex-col mt-3 ">
					<input className="w-80 " type="range" min={0} max={100} />

					<div className="flex justify-between ">
						<p>1:29</p>
						<p>3:00</p>
					</div>
				</div>

				<div className="flex justify-between text-3xl mt-3 ">
					<div
						className="cursor-pointer transition-all duration-500 active:scale-150"
						onClick={handleShuffleBtnClick}
					>
						{shuffleBtn ? (
							<PiShuffleSimpleBold title="Shuffle off" />
						) : (
							<PiShuffleSimpleLight title="Shuffle" />
						)}
					</div>
					<TbPlayerSkipBackFilled
						title="Previous Track"
						className="transition-all duration-500 active:scale-150 cursor-pointer"
					/>
					<div
						className="cursor-pointer transition-all duration-500 active:scale-150"
						onClick={handlePlayBtnClick}
					>
						{playBtn ? (
							<TbPlayerPause onClick={pauseSong} title="Pause" />
						) : (
							<TbPlayerPlayFilled onClick={playSong} title="Play" />
						)}
					</div>

					<TbPlayerSkipForwardFilled
						title="Next Track"
						className="transition-all duration-500 active:scale-150 cursor-pointer"
					/>
					<div
						className="cursor-pointer transition-all duration-500 active:scale-150"
						onClick={handleRepeatBtnClick}
					>
						{reapeatBtn ? (
							<RiRepeatOneFill title="Repeat off" />
						) : (
							<RiRepeat2Fill title="Repeat One" />
						)}
					</div>
				</div>
			</div>

			{/* right section */}
			{showSongsList && (
				<div className="min-w-[320px]">
					<div className="text-3xl">
						<TbPlaylist />
					</div>
					<div className="content-around">
						{songs?.map((song) => (
							<p
								key={song.id}
								className="flex justify-between items-center font-semibold text-slate-800 cursor-pointer"
							>
								<span>{song.title}</span>
								<TbTrashX />
							</p>
						))}
					</div>
				</div>
			)}
		</main>
	);
}
