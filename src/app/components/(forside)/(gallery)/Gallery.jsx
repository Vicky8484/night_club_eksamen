import GalleryClient from "@/app/components/(forside)/(gallery)/ShowGallery";

const Gallery = async () => {
  const response = await fetch(
    "https://night-club-api-2026-1nvc.onrender.com/gallery",
  );
  const pictures = await response.json();

  return (
    <section
      className="full-bleed bg-[url('/assets/bg/pattern_bg.jpg')] bg-cover bg-center
      bg-no-repeat pt-(--big-block-space) md:py-(--big-block-space)"
    >
      <GalleryClient pictures={pictures} />
    </section>
  );
};

export default Gallery;
