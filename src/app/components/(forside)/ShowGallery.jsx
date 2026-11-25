"use client";
import Title from "@/app/components/(alle_sider)/Title";
import { useState } from "react";
import { motion } from "motion/react";

const GalleryClient = ({ pictures }) => {
  const [selectedPicture, setSelectedPicture] = useState(null);

  return (
    <div className="">
      <Title overskrift="nigth club gallery" />
      <div className=" grid grid-cols-2 md:grid-cols-6  auto-rows-50 grid-flow-dense">
        {pictures.slice(0, 7).map((picture, index) => {
          const wideIndexes = [0, 2, 4, 5, 6];
          const isWide = wideIndexes.includes(index);
          return (
            <motion.div key={picture.id} onClick={() => setSelectedPicture(picture)} className={`group relative overflow-hidden cursor-pointer ${isWide ? "md:col-span-2 " : ""}`} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: index * 0.2 }}>
              <img src={`http://localhost:4000${picture.asset.url}`} alt={picture.asset.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
              <span className="absolute top-0 left-0 right-0 h-1 bg-(--accent1) scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-(--accent1) scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              <span className="absolute top-0 left-0 w-6 h-6 bg-(--accent1) [clip-path:polygon(0_0,100%_0,0_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 right-0 w-6 h-6 bg-(--accent1) [clip-path:polygon(100%_0,100%_100%,0_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          );
        })}
      </div>
      {selectedPicture && (
        <div onClick={() => setSelectedPicture(null)} className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-3xl max-h-[90dvh] overflow-auto bg-background border border-(--accent1)">
            <img src={`http://localhost:4000${selectedPicture.asset.url}`} alt={selectedPicture.asset.alt} className="w-full h-auto" />
            <p className="p-4">{selectedPicture.description}</p>

            <button onClick={() => setSelectedPicture(null)} className="absolute top-2 right-2 text-white text-2xl">
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryClient;
