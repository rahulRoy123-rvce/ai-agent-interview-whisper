import { cn } from "@/lib/utils";

export function DotBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-full">
      {/* Dotted background */}
      <div
        className={cn(
          "fixed inset-0 min-h-[100vh]",
          "[background-size:24px_24px]",
          "[background-image:radial-gradient(#e5e7eb_1.5px,transparent_1.5px)]",
          "dark:[background-image:radial-gradient(#404040_1.5px,transparent_1.5px)]",
          "opacity-50",
          "w-full h-full",
          "bg-repeat"
        )}
        style={{ minHeight: '100vh' }}
      />
      
      {/* Radial gradient overlay */}
      <div 
        className="fixed inset-0 bg-white/80 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] pointer-events-none dark:bg-black/80"
        style={{ minHeight: '100vh' }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
} 