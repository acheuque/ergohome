"use client";

import { useState, useEffect, useCallback } from "react";
import { getImageUrl } from "@/utils/imagePath";

interface ImageItem {
  src: string;
  description?: string;
}

interface LightboxCarouselProps {
  isOpen: boolean;
  onClose: () => void;
  mainImage: string;
  images: ImageItem[];
  projectName: string;
}

export default function LightboxCarousel({ isOpen, onClose, mainImage, images, projectName }: LightboxCarouselProps) {
  const [current, setCurrent] = useState(0);
  
  // Combine all images
  const allImages = [{ src: mainImage, description: "" }, ...(images || [])];

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Handle Keyboard Navigation
  useEffect(() => {
    if (isOpen) {
      setCurrent(0); // Reset to first image on open

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
        if (e.key === "ArrowRight") next(new Event('next') as any);
        if (e.key === "ArrowLeft") prev(new Event('prev') as any);
      };

      document.body.style.overflow = "hidden"; // Prevent background scroll
      window.addEventListener("keydown", handleKeyDown);
      
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, handleClose]);

  if (!isOpen) return null;
  
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % allImages.length);
  };
  
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={handleClose}
    >
      {/* Top Bar Navigation */}
      <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between z-50">
        <h2 className="text-white font-headline text-xl font-bold uppercase tracking-widest">{projectName}</h2>
        <button 
          onClick={handleClose}
          className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        className="relative w-full h-full md:w-10/12 md:h-5/6 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image wrapper
      >
        {allImages.map((img, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-500 flex flex-col items-center justify-center ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
          >
            <img 
              src={getImageUrl(img.src)} 
              alt={img.description || projectName} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
            />
            {/* Description Text */}
            {img.description && (
              <div className="mt-6 text-center max-w-2xl px-4">
                <p className="text-white/90 text-sm md:text-base font-body leading-relaxed">{img.description}</p>
              </div>
            )}
          </div>
        ))}

        {/* Floating Controls */}
        {allImages.length > 1 && (
          <>
            <button 
              onClick={prev} 
              className="absolute left-4 md:-left-12 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-black/40 hover:bg-primary rounded-full text-white backdrop-blur transition-all border border-white/10 shadow-lg z-30 group"
            >
              <span className="material-symbols-outlined text-2xl group-hover:-translate-x-1 transition-transform">chevron_left</span>
            </button>
            <button 
              onClick={next} 
              className="absolute right-4 md:-right-12 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-black/40 hover:bg-primary rounded-full text-white backdrop-blur transition-all border border-white/10 shadow-lg z-30 group"
            >
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">chevron_right</span>
            </button>
            
            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur px-4 py-2 rounded-full border border-white/10">
              <span className="text-white/80 font-label text-xs tracking-widest">{current + 1} / {allImages.length}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
