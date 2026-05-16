import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
    title: "Big Fashion Sale",
    description: "Discover trending styles with up to 50% OFF.",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1400&auto=format&fit=crop",
    title: "New Summer Collection",
    description: "Fresh arrivals for your perfect summer look.",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop",
    title: "Upgrade Your Style",
    description: "Premium fashion designed for modern lifestyle.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-all duration-700 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5">
            <h1 className="text-5xl md:text-7xl font-bold mb-5">
              {slide.title}
            </h1>

            <p className="text-lg md:text-2xl mb-8 max-w-2xl">
              {slide.description}
            </p>

            <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg text-lg font-semibold transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white w-12 h-12 rounded-full text-2xl"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white w-12 h-12 rounded-full text-2xl"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(slides.findIndex(s => s.id === slide.id))}
            className={`w-4 h-4 rounded-full ${
              currentSlide === slides.findIndex(s => s.id === slide.id)
                ? "bg-pink-500"
                : "bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;