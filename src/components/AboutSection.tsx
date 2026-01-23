import photographerHeadshot from "@/assets/photographer-headshot.jpg";

const AboutSection = () => {
  return (
    <section className="bg-card px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Headshot */}
          <div className="relative">
            <div className="aspect-square overflow-hidden">
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
                About Me
              </p>
              <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
                Hello, I'm <span className="text-primary">[Your Name]</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a passionate photographer specializing in capturing life's most precious moments. 
                With over [X] years of experience, I've had the privilege of documenting countless 
                stories through my lens.
              </p>
              <p className="leading-relaxed">
                My work focuses on portraits, weddings and events, couple sessions, and the unique 
                personalities of our beloved pets. I believe every photograph should tell a story 
                and evoke emotion.
              </p>
              <p className="leading-relaxed">
                When I'm not behind the camera, you'll find me exploring new locations, 
                experimenting with lighting techniques, or enjoying time with my own furry companions.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="font-serif text-3xl font-light text-primary">[X]+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-light text-primary">[X]+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Happy Clients
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-light text-primary">[X]+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Sessions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
