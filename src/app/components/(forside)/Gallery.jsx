import GalleryClient from "@/app/components/(forside)/ShowGallery";

const Gallery = async () => {
  const response = await fetch("http://localhost:4000/gallery");
  const pictures = await response.json();

  return (
    <section>
      <GalleryClient pictures={pictures} />
    </section>
  );
};

export default Gallery;
