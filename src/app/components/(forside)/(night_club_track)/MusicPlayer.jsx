"use client";
import { useState, useRef, useEffect } from "react";
import Title from "@/app/components/(alle_sider)/Title";
import { FaPlay, FaPause, FaVolumeUp, FaBackward, FaForward, FaRandom } from "react-icons/fa";

import AlbumScroll from "@/app/components/(forside)/(night_club_track)/AlbumScroll";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  const [volume, setVolume] = useState(1);

  const tracks = [
    {
      name: "euphoria",
      image: "/assets/content-img/track1.jpg",
      audio: "/assets/media/euphoria.mp3",
    },
    {
      name: "Black Box Funk",
      image: "/assets/content-img/track2.jpg",
      audio: "/assets/media/black-box-funky.mp3",
    },
    {
      name: "fashion red tape",
      image: "/assets/content-img/track_thumb.jpg",
      audio: "/assets/media/fashion-red-tape.mp3",
    },
    {
      name: "Neon Dreams",
      image: "/assets/content-img/track5.jpg",
      audio: "/assets/media/euphoria.mp3",
    },
    {
      name: "Midnight",
      image: "/assets/content-img/thumb1.jpg",
      audio: "/assets/media/black-box-funky.mp3",
    },
  ];
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };
  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const nextTrack = () => {
    const currentIndex = tracks.findIndex((t) => t.name === currentTrack.name);
    const next = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[next]);
  };
  const prevTrack = () => {
    const currentIndex = tracks.findIndex((t) => t.name === currentTrack.name);
    const prev = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrack(tracks[prev]);
  };
  const shuffleTrack = () => {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    setCurrentTrack(tracks[randomIndex]);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  return (
    <section className="my-7">
      <Title overskrift="Neon Grand Lights" />
      <div className="flex flex-col md:flex-row  gap-6 border border-(--accent1) p-6">
        <img src={currentTrack.image} alt={currentTrack.name} className="object-cover w-full md:w-48 md:h-48" />
        <audio
          ref={audioRef}
          src={currentTrack.audio}
          onTimeUpdate={(e) => {
            setCurrentTime(e.target.currentTime);
            setDuration(e.target.duration);
          }}
          onLoadedMetadata={(e) => {
            setDuration(e.target.duration);
          }}
          onEnded={() => setIsPlaying(false)}
        />
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-(--accent1) font-bold uppercase">{currentTrack.name}</h2>
          <input type="range" min="0" max={duration} value={currentTime} onChange={handleSeek} className="w-full accent-(--accent1)" />
          <div className="flex items-center justify-between">
            <p>
              {formatTime(currentTime)} / {formatTime(duration)}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <button onClick={prevTrack}>
                <FaBackward />
              </button>
              <button onClick={togglePlay} className="rounded-full border border-(--accent1) p-4 ">
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={nextTrack}>
                <FaForward />
              </button>
              <button onClick={shuffleTrack}>
                <FaRandom />
              </button>
              <div className="flex items-center gap-2">
                <FaVolumeUp className="text-(--accent1)" />
                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className=" w-20 accent-(--accent1)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlbumScroll tracks={tracks} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />
    </section>
  );
};

export default MusicPlayer;
