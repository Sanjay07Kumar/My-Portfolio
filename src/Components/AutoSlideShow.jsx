import { useEffect, useState } from "react";

const AutoSlideShow = ({ images, interval = 2500 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-auto overflow-hidden shadow-lg grayscale hover:grayscale-0">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Project Screenshot"
          className={`
            w-full h-auto object-contain
            transition-all duration-700 ease-in-out
            ${index === current
              ? "opacity-100 relative"
              : "opacity-0 absolute inset-0 pointer-events-none"}
          `}
        />
      ))}
    </div>
  );
};

export default AutoSlideShow;
