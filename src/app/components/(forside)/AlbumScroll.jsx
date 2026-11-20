const AlbumScroll = ({ tracks, setCurrentTrack }) => {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {tracks.map((track) => (
        <img key={track.name} src={track.image} alt={track.name} onClick={() => setCurrentTrack(track)} className="cursor-pointer" />
      ))}
    </div>
  );
};

export default AlbumScroll;
