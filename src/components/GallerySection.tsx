import galleryPortrait from "@/assets/gallery-portrait.jpg";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryCouple from "@/assets/gallery-couple.jpg";
import galleryPet from "@/assets/gallery-pet.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  span?: "tall" | "wide" | "normal";
}

const galleryImages: GalleryImage[] = [
  {
    src: galleryPortrait,
    alt: "Elegant portrait with soft studio lighting",
    category: "Portraits",
    span: "tall",
  },
  {
    src: galleryWedding,
    alt: "Beautiful wedding ceremony at golden hour",
    category: "Events & Weddings",
    span: "wide",
  },
  {
    src: galleryCouple,
    alt: "Romantic couple embrace at sunset",
    category: "Couple Shoots",
    span: "tall",
  },
  {
    src: galleryPet,
    alt: "Professional pet portrait with warm tones",
    category: "Pet Photography",
    span: "wide",
  },
];

const GallerySection = () => {
  return (
    <section className="bg-background px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            Selected Works
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${
                image.span === "tall"
                  ? "row-span-2"
                  : image.span === "wide"
                  ? "md:col-span-1 lg:col-span-2"
                  : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {/* Category Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
