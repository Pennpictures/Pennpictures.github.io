import heroImage from "src/assets/hero-landscape-DfjTqbxE.jpg";

interface HeroSectionProps {
  googleFormUrl?: string;
}

const HeroSection = ({ googleFormUrl = "#" }: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Co-founders at Taiwan"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      </div>

      {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-6 text-left">
        <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.3em] text-foreground/70 animate-fade-up">
          Pennpictures
        </p>
        <h1 className="mb-6 font-serif text-5xl font-light tracking-wide text-foreground md:text-7xl lg:text-8xl animate-fade-up [animation-delay:0.1s]">
          Penning Memories
        </h1>
        <p className="mb-10 max-w-md font-sans text-base font-light text-muted-foreground md:text-lg animate-fade-up [animation-delay:0.2s]">
          Capturing emotions, celebrating connections, and crafting narratives that speak beyond words.
        </p>
        <a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 border border-primary bg-primary/10 px-8 py-4 font-sans text-sm font-medium uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground animate-fade-up [animation-delay:0.3s]"
        >
          Get in Touch
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:1s]">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
