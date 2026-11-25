import GalleryClient from "@/app/components/(forside)/(gallery)/ShowGallery";

const Gallery = async () => {
  const response = await fetch("http://localhost:4000/gallery");
  const pictures = await response.json();

  return (
    <section
      className="full-bleed bg-[url('/assets/bg/pattern_bg.jpg')] bg-cover bg-center
      bg-no-repeat py-(--big-block-space)"
    >
      <GalleryClient pictures={pictures} />
    </section>
  );
};

export default Gallery;
