import galleryPortrait from "@/assets/gallery-portrait.jpg";
import galleryUrban from "@/assets/gallery-urban.jpg";
import galleryNature from "@/assets/gallery-nature.jpg";
import galleryArchitecture from "@/assets/gallery-architecture.jpg";
import gallerySeascape from "@/assets/gallery-seascape.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  span?: "tall" | "wide" | "normal";
}

const galleryImages: GalleryImage[] = [
  {
    src: galleryPortrait,
    alt: "Dramatic portrait with studio lighting",
    category: "Portrait",
    span: "tall",
  },
  {
    src: galleryUrban,
    alt: "Urban street scene at night with neon lights",
    category: "Urban",
    span: "wide",
  },
  {
    src: galleryNature,
    alt: "Lone tree on misty hillside at dawn",
    category: "Nature",
    span: "normal",
  },
  {
    src: galleryArchitecture,
    alt: "Modern architectural geometry in black and white",
    category: "Architecture",
    span: "tall",
  },
  {
    src: gallerySeascape,
    alt: "Ocean waves at sunset with rocky coastline",
    category: "Seascape",
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
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${
                image.span === "tall"
                  ? "row-span-2"
                  : image.span === "wide"
                  ? "md:col-span-2"
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
