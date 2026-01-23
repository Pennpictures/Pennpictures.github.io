interface FooterSectionProps {
  googleFormUrl?: string;
}

const FooterSection = ({ googleFormUrl = "#" }: FooterSectionProps) => {
  return (
    <footer className="border-t border-border bg-card px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-light text-foreground">
              Capturing Light
            </h3>
            <p className="mt-2 font-sans text-sm text-muted-foreground">
              Photography that tells stories
            </p>
          </div>

          {/* CTA Button */}
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary bg-transparent px-6 py-3 font-sans text-sm font-medium uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Book a Session
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-sans text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="#"
              className="font-sans text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Behance
            </a>
            <a
              href="#"
              className="font-sans text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
