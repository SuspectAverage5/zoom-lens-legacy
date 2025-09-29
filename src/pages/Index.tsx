import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { MicroscopeSection } from "@/components/MicroscopeSection";
import { Description } from "@radix-ui/react-toast";
import { useState } from "react";

const Index = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.3);
  const parallaxOffset = useParallax();
  const [showDefinitions, setShowDefinitions] = useState(false);

  const microscopeData = [
    {
      title: "Zacharias Jansen",
      period: "1585–1632",
      // description: "Dutch spectacle makers who are credited with inventing the compound microscope. Their revolutionary design used multiple lenses to achieve greater magnification than single-lens systems.",
      description: "Opticien Hollandais qui aurait eu l’idée de superposer deux lentilles convergentes dans des tubes coulissants entre 1590 et 1595.",
      // achievements: [
      //   "Created the first compound microscope with 3x-9x magnification",
      //   "Pioneered multi-lens optical systems",
      //   "Established the foundation for modern microscopy",
      //   "Inspired a generation of optical instrument makers"
      // ],
      achievements: ["Ce système grossissait environ 10x", "C’est considéré comme le premier microscope optique", "C’est le point de départ d’une longue histoire scientifique", "Sans son idée, on n’aurait pas découvert la cellule ni développé toute la biologie moderne"],
      imageAlt: "Early Jansen compound microscope replica",
    },
    {
      title: "Galileo Galilei",
      period: "1609-1610",
      // description: "The renowned astronomer adapted telescope technology to create an improved compound microscope, calling it 'occhiolino' (little eye). His modifications significantly enhanced image clarity.",
      description: "Astronome célébre qui utilise la technologie des télescopes pour créer un microscope qu'il nomme « occhiolino » (clin d'œil)",
      // achievements: [
      //   "Improved lens grinding techniques for better clarity",
      //   "Achieved magnifications up to 20x",
      //   "Documented microscopic observations scientifically",
      //   "Bridged astronomy and microscopy technologies"
      // ],
      achievements: ["Améliore la clarté des lentilles", "Grossissements jusqu'à 30x", "Documentation scientifique des observations microscopiques", "Rapprochement des technologies de l'astronomie et de la microscopie"],
      imageAlt: "Galileo's microscope design and optical innovations",
      reversed: true,
      imgsrc: "galilee-microscope.jpg"
    },
    {
      title: "Antonie van Leeuwenhoek",
      period: "1670-1720",
      description: "Commerçant et scientifique néerlandais né en 1632. Curieux et passionné, il devient célèbre pour ses observations au microscope, qu’il fabrique lui-même.",
      // achievements: [
      //   "Achieved unprecedented 275x magnification",
      //   "First to observe bacteria and microorganisms",
      //   "Created over 500 microscopes in his lifetime",
      //   "Established microscopy as a scientific discipline"
      // ],
      achievements: ["En 1668, il présente un microscope 10 fois plus puissant que celui de Galilée.", "Son microscope utilise une seule lentille de forte résolution.", "Permet d’observer des structures invisibles à l’œil nu (Comme des cellules vivantes).", "Il est le premier à déssiner des cellules (sans les avoir nommées)", "Il est considéré comme l'inventeur du microscope"],
      imageAlt: "Leeuwenhoek's precision single-lens microscope",
      imgsrc: "marc-img.jpg"
    },
    {
      title: "Microscopie Moderne",
      period: "1900-Présent",
      // description: "From electron microscopes to atomic force microscopy, modern instruments have revealed the smallest details of matter, enabling breakthroughs in medicine, materials science, and nanotechnology.",
      description: "Même principe que celui de Jansen (superposer deux lentilles) mais de façon plus développée (lentilles de meilleure qualité…)",
      // achievements: [
      //   "Electron microscopy: magnification up to 2,000,000x",
      //   "Atomic force microscopy: individual atom resolution",
      //   "Fluorescence microscopy: live cell imaging",
      //   "Digital integration and AI-enhanced imaging"
      // ],
      achievements: ["Grossissement x1000", "Permettre de voir des cellules ou bactéries", "Voir facilement des détails invisibles à l'œuil nu"],
      imageAlt: "Modern electron microscope and digital imaging",
      reversed: true,
      imgsrc: "modern-microscope.jpg"
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
                Voyagez à travers quatre siècles d'innovation scientifique, des premiers microscopes composés aux instruments à résolution atomique d'aujourd'hui qui révèlent les éléments fondamentaux de la vie.
              </p>
            </div>
            
            <div className="scientific-card max-w-4xl mx-auto">
              <img 
                src="/vibrant-cells.jpg" 
                alt="Cellules microscopiques"
                className="w-full h-64 object-cover rounded-lg"
              />
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
                Explorons l'histoire
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div> */}
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
          imgsrc={section.imgsrc}
        />
      ))}

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Pour continuer notre voyage Scientifique
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous allons faire un petit jeu
            </p>
            <div className="pt-4">
              <button 
                className="scientific-btn"
                onClick={() => setShowDefinitions(!showDefinitions)}
              >
                {showDefinitions ? "Masquer les définitions" : "Révéler les définitions"}
              </button>
            </div>
            
            <div 
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                showDefinitions ? 'max-h-[1000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="scientific-card max-w-4xl mx-auto text-left">
                <h4 className="text-xl font-bold text-foreground mb-6">Définitions</h4>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="hover:text-foreground transition-colors">
                    <span className="font-semibold text-primary">1.</span> Terme désignant l'agrandissement visuel d'un objet.
                  </li>
                  <li className="hover:text-foreground transition-colors">
                    <span className="font-semibold text-primary">2.</span> Nom du microscope utilisé avant l'électronique.
                  </li>
                  <li className="hover:text-foreground transition-colors">
                    <span className="font-semibold text-primary">3.</span> Ancien mot italien pour désigner le microscope de Galilée.
                  </li>
                  <li className="hover:text-foreground transition-colors">
                    <span className="font-semibold text-primary">4.</span> Instrument optique permettant de voir de très petits objets.
                  </li>
                  <li className="hover:text-foreground transition-colors">
                    <span className="font-semibold text-primary">5.</span> Personne qui a peut-être inventé le premier microscope vers 1590.
                  </li>
                  <li className="hover:text-foreground transition-colors">
                    <span className="font-semibold text-primary">6.</span> Pièce de verre courbé qui fait converger ou diverger la lumière.
                  </li>
                  <li className="hover:text-foreground transition-colors">
                    <span className="font-semibold text-primary">7.</span> Nom général donné aux lentilles qui rapprochent l'image.
                  </li>
                  <li className="hover:text-foreground transition-colors">
                    <span className="font-semibold text-primary">8.</span> Surface plate en verre sur laquelle on place l'objet à observer.
                  </li>
                  <li className="hover:text-foreground transition-colors">
                    <span className="font-semibold text-primary">9.</span> Unité de mesure utilisée pour des objets très petits (symbole µm).
                  </li>
                  <li className="hover:text-foreground transition-colors">
                    <span className="font-semibold text-primary">10.</span> Matière que l'on met sur une lame pour l'observer au microscope.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
