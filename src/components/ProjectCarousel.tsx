"use client";

import { useState } from "react";
import { getImageUrl } from "@/utils/imagePath";

interface ImageItem {
  src: string;
  description?: string;
}

interface ProjectCarouselProps {
  mainImage: string;
  images: ImageItem[];
  aspectClass: string;
}

export default function ProjectCarousel({ mainImage, images, aspectClass }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  
  // Combine main image with carousel images if they exist
  const allImages = [{ src: mainImage, description: "" }, ...(images || [])];
  
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % allImages.length);
  };
  
  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className={`relative overflow-hidden w-full ${aspectClass} group/carousel`}>
      {allImages.map((img, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-700 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img 
            src={getImageUrl(img.src)} 
            alt={img.description || 'Project Image'} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover/carousel:scale-105" 
          />
          {/* Overlay description for carousel specific images */}
          {img.description && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <p className="text-white text-sm font-body">{img.description}</p>
            </div>
          )}
        </div>
      ))}

      {/* Constant Hover Overlay for the primary view logic */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 flex items-end p-8">
        {allImages.length <= 1 && <span className="text-white font-label text-xs tracking-widest uppercase">Ver Detalles</span>}
      </div>

      {/* Controls */}
      {allImages.length > 1 && (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity z-30">
          <button onClick={prev} className="w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-primary rounded-full text-white backdrop-blur transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button onClick={next} className="w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-primary rounded-full text-white backdrop-blur transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      )}

      {/* Dots Indicator */}
      {allImages.length > 1 && (
         <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-30">
            {allImages.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-primary scale-125' : 'bg-white/50'}`} />
            ))}
         </div>
      )}
    </div>
  );
}
