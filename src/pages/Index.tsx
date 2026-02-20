import { useState } from "react";
import { Camera, ArrowRight, Menu, X as XIcon, Instagram } from "lucide-react";
import GalleryModal from "@/components/GalleryModal";

import aboutMe from "@/assets/about-me.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import logo from "@/assets/Pennpictures Logo.png";

const GOOGLE_FORM_URL = "https://forms.google.com/your-form-link";

const NAV_LINKS = [
{ label: "Home", href: "#home" },
{ label: "About Me", href: "#about" },
{ label: "Portfolio", href: "#portfolio" },
{ label: "Book Now", href: "#book" }];


const portfolioCategories = [
{
  title: "Landscapes",
  cover: portfolio1,
  images: [portfolio1, portfolio3, portfolio5, portfolio4, portfolio2]
},
{
  title: "Portraits",
  cover: portfolio2,
  images: [portfolio2, portfolio1, portfolio6, portfolio3, portfolio5]
},
{
  title: "Weddings",
  cover: portfolio3,
  images: [portfolio3, portfolio2, portfolio1, portfolio5, portfolio6]
},
{
  title: "Street",
  cover: portfolio4,
  images: [portfolio4, portfolio1, portfolio6, portfolio2, portfolio5]
},
{
  title: "Nature",
  cover: portfolio5,
  images: [portfolio5, portfolio1, portfolio3, portfolio6, portfolio4]
},
{
  title: "Food",
  cover: portfolio6,
  images: [portfolio6, portfolio4, portfolio2, portfolio5, portfolio1]
}];


const Index = () => {
  const [galleryOpen, setGalleryOpen] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 bg-background/70 backdrop-blur-md border-b border-border/50">
        <a href="#home" className="font-display text-xl text-foreground flex items-center gap-2">
          <img src={logo} alt="Pennpictures" className="w-6 h-6" />
          <span className="text-gradient-gold font-bold">Pennpictures</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">

              {link.label}
            </a>
          )}
          <a
            href="https://instagram.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram">

            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

          {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen &&
      <div className="fixed inset-0 z-30 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map((link) =>
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="font-display text-2xl text-foreground hover:text-primary transition-colors">

              {link.label}
            </a>
        )}
        </div>
      }

      {/* Hero with landscape background */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">

        <img
          src={portfolio1}
          alt="Landscape hero"
          className="absolute inset-0 w-full h-full object-cover" />

        <div className="absolute inset-0 overlay-dark" />

        <div className="relative z-10">
          <img src={logo} alt="Pennpictures" className="w-6 h-6" />
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
            Penning<span className="text-gradient-gold">Memories</span>
          </h1>
          <p className="font-body text-lg max-w-xl mx-auto mb-10 text-primary-foreground">
            Professional photography that tells your story. Let's create something beautiful together.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-body font-semibold text-lg hover:opacity-90 transition-opacity">

            Book Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src={aboutMe}
              alt="Photographer portrait"
              className="w-full h-full object-cover" />

          </div>
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              About <span className="text-gradient-gold">Me</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              With over a decade of experience behind the lens, I specialize in capturing
              the raw beauty of life's most precious moments. From intimate portraits to
              sweeping landscapes, every frame is crafted with intention and artistry.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              My approach blends documentary authenticity with cinematic composition,
              creating images that resonate long after the shutter clicks.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-foreground text-center mb-4">
            Portfolio <span className="text-gradient-gold">Shots</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 font-body">
            Click any category to explore the gallery
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioCategories.map((cat, i) =>
            <button
              key={cat.title}
              onClick={() => setGalleryOpen(i)}
              className="group relative aspect-square overflow-hidden rounded-sm">

                <img
                src={cat.cover}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 overlay-dark flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-display text-xl text-foreground">
                    {cat.title}
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-24 px-6 text-center scroll-mt-20">
        <div className="max-w-2xl mx-auto bg-primary/90 backdrop-blur-sm border border-border rounded-sm p-12">
          <h2 className="font-display text-3xl font-bold mb-4 text-primary-foreground">
            Ready to <span className="text-gradient-gold">Book</span>?
          </h2>
          <p className="font-body mb-8 text-primary-foreground">
            Reserve your session today. Fill out the form and I'll get back to you within 24 hours.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-body font-semibold text-lg hover:opacity-90 transition-opacity">

            Click Me
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border flex flex-col items-center gap-4">
        <a
          href="https://instagram.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Instagram">

          <Instagram className="w-5 h-5" />
        </a>
        <p className="text-muted-foreground font-body text-sm">
          © 2026 Photography. All rights reserved.
        </p>
      </footer>

      {/* Gallery Modal */}
      {galleryOpen !== null &&
      <GalleryModal
        images={portfolioCategories[galleryOpen].images}
        title={portfolioCategories[galleryOpen].title}
        isOpen={true}
        onClose={() => setGalleryOpen(null)} />

      }
    </div>);

};

export default Index;