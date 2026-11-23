import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AlbumScroll = ({ tracks, setCurrentTrack, currentTrack }) => {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={scrollLeft}>
        <FaChevronLeft />
      </button>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto">
        {tracks.map((track) => {
          const isActive = track.name === currentTrack.name;
          return (
            <div key={track.name} onClick={() => setCurrentTrack(track)} className={`relative flex-shrink-0 cursor-pointer ${isActive ? "border-2 border-(--accent1)" : ""}`}>
              <img src={track.image} alt={track.name} className="w-56 h-56 object-cover" />
            </div>
          );
        })}{" "}
      </div>

      <button onClick={scrollRight}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default AlbumScroll;
