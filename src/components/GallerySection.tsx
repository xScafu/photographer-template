import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function GallerySection() {
  const UNSPLASH_ACCESS_KEY = "e4D89hwtJhPDSjMj4PDEB7w78et6x9vX_AEBnqJ5vnk";
  const [galleryPhotos, setGalleryPhotos] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: "mountain landscape",
          per_page: 8,
          orientation: "landscape",
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      })
      .then((res) => {
        setGalleryPhotos(res.data.results.map((img: any) => img.urls.regular));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className="py-24 bg-[#f6f6f6] text-center">
        <h2 className="text-2xl font-semibold mb-8">Gallery</h2>
        <div className="w-full max-w-5xl mx-auto">
          {galleryPhotos.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              className="rounded-lg shadow overflow-hidden"
            >
              {galleryPhotos.map((url, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={url}
                    alt={`Gallery Slide ${i}`}
                    className="w-full h-[500px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>Loading gallery...</p>
          )}
        </div>
      </section>
    </>
  );
}
