"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightboxCarousel from "@/components/LightboxCarousel";
import { getImageUrl } from "@/utils/imagePath";

// ==========================================
// CONFIGURACIÓN DE PROYECTOS Y REMODELACIONES
// ==========================================
// Instrucciones para agregar imágenes reales:
// 1. Guarda tus imágenes dentro de la carpeta: `/public/images/proyectos/` 
//    (puedes crear esta carpeta si no existe).
// 2. Modifica la propiedad `mainImage` para que apunte a tu imagen (ej: "/images/proyectos/vale-mati-cover.jpg")
// 3. Agrega las imágenes adicionales en `carouselImages` con sus descripciones.
// ==========================================

interface ImageItem {
  src: string;
  description?: string;
}

interface Project {
  name: string;
  description: string;
  tag?: string;
  mainImage: string;
  carouselImages: ImageItem[];
  colSpan?: string;
  aspect?: string;
}

const cocinasProjects: Project[] = [
  {
    name: 'INTEGRACIÓN',
    description: '',
    mainImage: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Integracion_01-1280.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Integracion_02-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Integracion_03-1280.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Integracion_04-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Integracion_05-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Integracion_06-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Integracion_07-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Integracion_08-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-8',
    aspect: 'aspect-[16/9]'
  },
  {
    name: 'ALMACENAJE',
    description: '',
    mainImage: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Almacenaje_01-640.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Almacenaje_02-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Almacenaje_03-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Almacenaje_04-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Almacenaje_05-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[6/7]'
  },
  {
    name: 'AMPLIACIÓN',
    description: '',
    mainImage: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Ampliacion_01-640.jpeg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Ampliacion_02-640.jpeg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Ampliacion_03-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
  {
    name: 'COMEDOR INTEGRADO',
    description: '',
    mainImage: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_ComedorIntegrado_01-640.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_ComedorIntegrado_02-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_ComedorIntegrado_03-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_ComedorIntegrado_04-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_ComedorIntegrado_05-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_ComedorIntegrado_06-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_ComedorIntegrado_07-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_ComedorIntegrado_08-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_ComedorIntegrado_09-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
  {
    name: 'EFICIENCIA',
    description: '',
    mainImage: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Eficiencia_01-640.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Eficiencia_02-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
  {
    name: 'SUPERFICIE DE TRABAJO',
    description: '',
    mainImage: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_SuperficiedeTrabajo_01-1280.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_SuperficiedeTrabajo_02-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_SuperficiedeTrabajo_03-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_SuperficiedeTrabajo_04-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_SuperficiedeTrabajo_05-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_SuperficiedeTrabajo_06-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_SuperficiedeTrabajo_07-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_SuperficiedeTrabajo_08-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
  {
    name: 'REDISTRIBUCIÓN',
    description: '',
    mainImage: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Redistribucion_01-1280.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Redistribucion_02-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Redistribucion_03-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Redistribucion_04-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
  {
    name: 'ORDEN',
    description: '',
    mainImage: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Orden_01-640.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_Orden_02-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
];

const remodelacionesProjects: Project[] = [
  {
    name: 'BAÑO',
    description: '',
    tag: 'BAÑO',
    mainImage: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_Bano_01-640.jpg',
    carouselImages: [],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[5/4]'
  },
  {
    name: 'BAÑO 2',
    description: '',
    tag: 'BAÑO',
    mainImage: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_Bano_2_01-640.jpeg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_Bano_2_02-640.jpeg', description: '' }
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[5/4]'
  },
  {
    name: 'EXTERIOR',
    description: '',
    tag: 'EXTERIOR',
    mainImage: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_Exterior_01-640.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_Exterior_02-640.jpg', description: '' }
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[5/4]'
  },
  {
    name: 'LOGIA EXTERIOR',
    description: '',
    tag: 'LOGIA',
    mainImage: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_LogiaExterior_01-640.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_LogiaExterior_02-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_LogiaExterior_03-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_LogiaExterior_04-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_LogiaExterior_05-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_LogiaExterior_06-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_LogiaExterior_07-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-6',
    aspect: 'aspect-[16/9]'
  },
  {
    name: 'MODERNIZACIÓN',
    description: '',
    tag: 'REMODELACIÓN',
    mainImage: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_Modernizacion_01-1280.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_Modernizacion_02-1280.jpg', description: '' },
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_Modernizacion_03-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_Modernizacion_04-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/REMODELACIONES/Proyectos_Remodelaciones_Modernizacion_05-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-6',
    aspect: 'aspect-[16/9]'
  }
];

const equipamientoProjects: Project[] = [
  {
    name: 'ALMACENAJE ESCALERA',
    description: '',
    mainImage: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_AlmacenajeEscalera_01-640.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_AlmacenajeEscalera_02-640.jpg', description: '' },
      { src: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_AlmacenajeEscalera_03-1280.jpg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
  {
    name: 'CLOSET',
    description: '',
    mainImage: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_Closet_01-640.jpg',
    carouselImages: [],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
  {
    name: 'ESCRITORIO CLOSET',
    description: '',
    mainImage: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_EscritorioCloset_01-640.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_EscritorioCloset_02-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
  {
    name: 'HABITACIÓN INTEGRAL',
    description: '',
    mainImage: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_HabitacionIntegral_01-640.jpeg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_HabitacionIntegral_02-640.jpeg', description: '' },
      { src: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_HabitacionIntegral_03-640.jpeg', description: '' },
      { src: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_HabitacionIntegral_04-640.jpeg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
  {
    name: 'HOME OFFICE',
    description: '',
    mainImage: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_HomeOffice_01-640.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_HomeOffice_02-640.jpg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
  {
    name: 'LIBRERO',
    description: '',
    mainImage: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_Librero_01.jpg',
    carouselImages: [
      { src: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_Librero_02.jpg', description: '' },
    ],
    colSpan: 'md:col-span-4',
    aspect: 'aspect-[4/5]'
  },
  {
    name: 'CAJONERA',
    description: '',
    mainImage: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_Librero_03.jpg',
    carouselImages: [
    ],
    colSpan: 'md:col-span-6',
    aspect: 'aspect-[16/9]'
  },

  {
    name: 'MESÓN ACCESIBLE',
    description: '',
    mainImage: '/images/PROYECTOS_web/EQUIPAMIENTO/Proyectos_Equipamiento_MesonAccesible_01.jpg',
    carouselImages: [
    ],
    colSpan: 'md:col-span-6',
    aspect: 'aspect-[16/9]'
  }
];


export default function Proyectos() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Header and rest of page */}
        <header className="px-8 max-w-screen-2xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="font-label text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Portafolio Residencial</span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-background leading-[0.9]">
                Espacios que <br /> <span className="text-outline">Respiran Precisión</span>
              </h1>
            </div>
            <p className="font-body text-lg text-secondary max-w-md leading-relaxed">
              Diseño técnico y estético fusionados para transformar el núcleo de la vida moderna. Proyectos curados bajo la filosofía de ergonomía residencial.
            </p>
          </div>
        </header>

        {/* Category: Cocinas */}
        <section className="mb-32">
          <div className="px-8 max-w-screen-2xl mx-auto mb-12 flex items-center gap-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Cocinas</h2>
            <div className="h-[1px] flex-grow bg-outline-variant opacity-30" />
            <span className="font-label text-sm text-secondary">Proyectos Seleccionados</span>
          </div>

          <div className="px-8 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {cocinasProjects.map((project, index) => (
              <div
                key={index}
                className={`${project.colSpan} group cursor-pointer overflow-hidden rounded-xl bg-surface-container-low`}
                onClick={() => openLightbox(project)}
              >
                <div className={`relative overflow-hidden w-full ${project.aspect}`}>
                  <img src={getImageUrl(project.mainImage)} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-label text-xs tracking-widest uppercase flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">fullscreen</span>
                      Ver Detalles
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-headline text-xl font-bold uppercase">{project.name}</h3>
                  <p className="text-secondary text-sm mt-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category: Remodelaciones */}
        <section className="bg-surface-container-low py-24" id="remodelaciones">
          <div className="px-8 max-w-screen-2xl mx-auto mb-12 flex items-center gap-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Remodelaciones</h2>
            <div className="h-[1px] flex-grow bg-outline-variant opacity-30" />
            <span className="font-label text-sm text-secondary">Proyectos Integrales</span>
          </div>

          <div className="px-8 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {remodelacionesProjects.map((project, index) => (
              <div
                key={index}
                className={`${project.colSpan} group cursor-pointer`}
                onClick={() => openLightbox(project)}
              >
                <div className={`relative overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 rounded-xl ${project.aspect}`}>
                  <img src={getImageUrl(project.mainImage)} alt={project.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 z-40">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-label font-bold tracking-tighter uppercase rounded-full">
                      {project.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur rounded-full text-white">
                      <span className="material-symbols-outlined text-xl">fullscreen</span>
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline text-xl font-bold tracking-tight">{project.name}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Category: Equipamiento */}
        <section className="py-24" id="equipamiento">
          <div className="px-8 max-w-screen-2xl mx-auto mb-12 flex items-center gap-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Equipamiento</h2>
            <div className="h-[1px] flex-grow bg-outline-variant opacity-30" />
            <span className="font-label text-sm text-secondary">Proyectos</span>
          </div>

          <div className="px-8 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {equipamientoProjects.map((project, index) => (
              <div
                key={index}
                className={`${project.colSpan} group cursor-pointer overflow-hidden rounded-xl bg-surface-container-low`}
                onClick={() => openLightbox(project)}
              >
                <div className={`relative overflow-hidden w-full ${project.aspect}`}>
                  <img src={getImageUrl(project.mainImage)} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-label text-xs tracking-widest uppercase flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">fullscreen</span>
                      Ver Detalles
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-headline text-xl font-bold uppercase">{project.name}</h3>
                  <p className="text-secondary text-sm mt-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>


      {/* Lightbox Modal */}
      {selectedProject && (
        <LightboxCarousel
          isOpen={!!selectedProject}
          onClose={closeLightbox}
          projectName={selectedProject.name}
          mainImage={selectedProject.mainImage}
          images={selectedProject.carouselImages}
        />
      )}

      <Footer />
    </>
  );
}