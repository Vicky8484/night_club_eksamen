"use client";
import {useState, useRef} from "react";
import Title from "@/app/components/(alle_sider)/Title";

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
  return (
    <section className="my-7">
      <Title overskrift="Neon Grand Lights" />
      <img src={currentTrack.image} alt={currentTrack.name} />
      <h2>{currentTrack.name}</h2>
      <audio
        ref={audioRef}
        src={currentTrack.audio}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
      />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
      <p>
        {formatTime(currentTime)} / {formatTime(duration)}
      </p>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <AlbumScroll tracks={tracks} setCurrentTrack={setCurrentTrack} />
    </section>
  );
};

export default MusicPlayer;
