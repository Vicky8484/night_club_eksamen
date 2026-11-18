"use client";

const GalleryClient = ({ pictures }) => {
  return (
    <div className="grid grid-cols-6 auto-rows-50 grid-flow-dense">
      {pictures.slice(0, 7).map((picture, index) => {
        const wideIndexes = [0, 2, 4, 5, 6];
        const isWide = wideIndexes.includes(index);
        return (
          <div key={picture.id} className={isWide ? "col-span-2 " : ""}>
            <img src={`http://localhost:4000${picture.asset.url}`} alt={picture.asset.alt} className="w-full h-full object-cover" />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryClient;
