import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { MicroscopeSection } from "@/components/MicroscopeSection";

const Index = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.3);
  const parallaxOffset = useParallax();

  const microscopeData = [
    {
      title: "Hans & Zacharias Jansen",
      period: "1590s",
      description: "Dutch spectacle makers who are credited with inventing the compound microscope. Their revolutionary design used multiple lenses to achieve greater magnification than single-lens systems.",
      achievements: [
        "Created the first compound microscope with 3x-9x magnification",
        "Pioneered multi-lens optical systems",
        "Established the foundation for modern microscopy",
        "Inspired a generation of optical instrument makers"
      ],
      imageAlt: "Early Jansen compound microscope replica",
    },
    {
      title: "Galileo Galilei",
      period: "1609-1610",
      description: "The renowned astronomer adapted telescope technology to create an improved compound microscope, calling it 'occhiolino' (little eye). His modifications significantly enhanced image clarity.",
      achievements: [
        "Improved lens grinding techniques for better clarity",
        "Achieved magnifications up to 20x",
        "Documented microscopic observations scientifically",
        "Bridged astronomy and microscopy technologies"
      ],
      imageAlt: "Galileo's microscope design and optical innovations",
      reversed: true,
    },
    {
      title: "Antonie van Leeuwenhoek",
      period: "1670s-1720s",
      description: "Dutch scientist who perfected single-lens microscopes and became the first person to observe and describe bacteria, protozoa, and other microorganisms, earning him the title 'Father of Microbiology'.",
      achievements: [
        "Achieved unprecedented 275x magnification",
        "First to observe bacteria and microorganisms",
        "Created over 500 microscopes in his lifetime",
        "Established microscopy as a scientific discipline"
      ],
      imageAlt: "Leeuwenhoek's precision single-lens microscope",
    },
    {
      title: "Modern Microscopy",
      period: "1900s-Present",
      description: "From electron microscopes to atomic force microscopy, modern instruments have revealed the smallest details of matter, enabling breakthroughs in medicine, materials science, and nanotechnology.",
      achievements: [
        "Electron microscopy: magnification up to 2,000,000x",
        "Atomic force microscopy: individual atom resolution",
        "Fluorescence microscopy: live cell imaging",
        "Digital integration and AI-enhanced imaging"
      ],
      imageAlt: "Modern electron microscope and digital imaging",
      reversed: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="parallax-bg absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"
          style={{
            transform: `translateY(${parallaxOffset * 0.5}px)`,
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div
            ref={heroRef}
            className={`zoom-trigger ${heroInView ? 'in-view' : ''} space-y-8`}
          >
            <div className="space-y-4">
              <h1 className="scientific-headline">
                L'Évolution du
                <br />
                <span className="text-primary">Microscope</span>
              </h1>
              <p className="scientific-subtitle max-w-3xl mx-auto">
                Journey through four centuries of scientific innovation, from the first compound microscopes 
                to today's atomic-resolution instruments that reveal the fundamental building blocks of life.
              </p>
            </div>
            
            <div className="scientific-card max-w-4xl mx-auto">
              <div className="image-placeholder">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center animate-float">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                    >
                      <path d="M12 1L8 5v6H6v2h2v6l4 4 4-4v-6h2V11h-2V5l-4-4zM10 7h4v2h-4V7zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Hero Image: Microscope Evolution
                    </h3>
                    <p className="text-muted-foreground">
                      Timeline visualization or iconic microscope image
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="scientific-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
                Explore the History
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Historical Sections */}
      {microscopeData.map((section, index) => (
        <MicroscopeSection
          key={index}
          title={section.title}
          period={section.period}
          description={section.description}
          achievements={section.achievements}
          imageAlt={section.imageAlt}
          reversed={section.reversed}
        />
      ))}

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Continue Your Scientific Journey
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The story of microscopy continues to evolve with new technologies and discoveries. 
              Each innovation builds upon centuries of scientific curiosity and innovation.
            </p>
            <div className="pt-4">
              <button className="scientific-btn">
                Learn More About Modern Microscopy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
