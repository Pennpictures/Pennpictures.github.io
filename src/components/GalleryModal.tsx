import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalProps {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal = ({ images, title, isOpen, onClose }: GalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const goNext = () => setCurrentIndex((i) => (i + 1) % images.length);
  const goPrev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <h3 className="font-display text-2xl text-foreground mb-4 text-center">
          {title}
        </h3>

        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <img
            src={images[currentIndex]}
            alt={`${title} - ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-background/60 text-foreground hover:bg-background/80 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-background/60 text-foreground hover:bg-background/80 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-16 h-12 rounded-sm overflow-hidden border-2 transition-all ${
                i === currentIndex ? "border-primary opacity-100" : "border-transparent opacity-50 hover:opacity-75"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
