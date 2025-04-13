import { useEffect, useState } from "react";
import axios from "axios";

export default function HeroSection() {
  const UNSPLASH_ACCESS_KEY = "e4D89hwtJhPDSjMj4PDEB7w78et6x9vX_AEBnqJ5vnk";
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: "landscape nature",
          per_page: 6,
          orientation: "squarish",
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      })
      .then((res) => {
        setPhotos(res.data.results.map((img: any) => img.urls.small));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <header className="flex flex-col items-center py-8">
        <h1 className="text-4xl font-bold tracking-wide mb-16">LOGO</h1>
        <div className="grid grid-cols-3">
          {photos.length > 0 ? (
            photos.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`Grid ${i}`}
                className="aspect-square object-cover shadow-md"
              />
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </header>
    </>
  );
}
