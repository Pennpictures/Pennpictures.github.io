import photographerHeadshot from "@/assets/photographer-headshot.jpg";

const AboutSection = () => {
  return (
    <section className="bg-card px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Headshot */}
          <div className="relative">
            <div className="aspect-none">
              <img
                src={photographerHeadshot}
                alt="Professional photographer portrait"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border-2 border-primary/30" />
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div>
              <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
                About Us
              </p>
              <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
                Hello there! We’re Leon and Elizabeth, a husband-and-wife duo.
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Our photography journey began during the two years we lived in Taiwan.
                On weekends we would often explore different parts of the country,
                snapping photos wherever we went (see photos below!). Those experiences
                inspired us to start Pennpictures.
              </p>
              <p className="text-lg leading-relaxed">
                We’re passionate about helping you document your special moments —
                images you can look back on and cherish for years to come. We believe
                that photography sessions should be easy and stress-free, so rest assured
                — you are in good hands! Our goal is to make every session as relaxed and
                fun as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
