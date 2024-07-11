import Swiper from "./Nested Components/Swiper/Swiper";

const Gallery = () => {
  return (
    <div id="gallery" className="w-7/12 mx-auto mt-24 flex flex-col gap-16">
      <h1 className="text-[#897be2] text-center text-[45px] uppercase font-bold">Gallery</h1>
      <div>
        <Swiper />
      </div>
    </div>
  )
}

export default Gallery;
