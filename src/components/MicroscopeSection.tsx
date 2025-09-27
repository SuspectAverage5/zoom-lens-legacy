import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface MicroscopeSectionProps {
  title: string;
  period: string;
  description: string;
  achievements: string[];
  imageAlt: string;
  reversed?: boolean;
  imgsrc: string;
}

export const MicroscopeSection = ({
  title,
  period,
  description,
  achievements,
  imageAlt,
  reversed = false,
  imgsrc
}: MicroscopeSectionProps) => {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <section className="scientific-section scroll-section">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={cn(
            "grid md:grid-cols-2 gap-12 items-center",
            "zoom-trigger",
            { "in-view": isInView },
            { "md:grid-flow-col-dense": reversed }
          )}
        >
          {/* Content */}
          <div className={cn("space-y-6", { "md:order-2": reversed })}>
            <div className="space-y-2">
              <div className="text-primary font-semibold text-lg tracking-wide">
                {period}
              </div>
              <h2 className="section-title">{title}</h2>
            </div>
            
            <p className="scientific-subtitle">{description}</p>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                Contributions:
              </h3>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className={cn("", { "md:order-1": reversed })}>
            <div className="scientific-card">
              <div className="image-placeholder group">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center group-hover:animate-magnify">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                    >
                      <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 13 15.5l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      {imageAlt}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Custom image placeholder
                      <img src="{imgsrc}"/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};