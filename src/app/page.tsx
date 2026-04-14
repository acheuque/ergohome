import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getImageUrl } from "@/utils/imagePath";

export default function Inicio() {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative min-h-[700px] flex items-start pt-38 overflow-hidden" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${getImageUrl('/images/HOME_web/Home_Portada-1280.jpg')}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 technical-grid pointer-events-none" />
          <div className="max-w-screen-2xl mx-auto px-8 w-full gap-12 items-center">
            <div className="z-10 text-white flex flex-col justify-center">
              <img alt="Ergohome" className="w-full md:w-1/2 lg:w-1/3 mb-10 ml-[-35px]" data-alt="Ergohome" src={getImageUrl("/images/HOME_web/Ergohome_Logo_Amarillo_Blanco-640.png")} />
              <p className="text-white/90 pt-35 text-xl max-w-2xl mb-10 leading-relaxed">
                Tu familia merece un hogar que se adapte a sus necesidades, creamos espacios ergonómicos y funcionales que facilitan las tareas cotidianas.
              </p>

              {/*

              <span className="font-label text-primary font-bold tracking-widest uppercase text-xs mb-4 block mt-4">Residential Ergonomics</span>
              <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-8">
                Diseñamos tu cocina con <br /><span className="text-primary drop-shadow-lg">alta calidad</span> y ergonomía
              </h1>
              <p className="text-white/90 text-xl max-w-2xl mb-10 leading-relaxed">
                Transformamos el corazón de tu hogar en un santuario técnico donde la precisión arquitectónica se encuentra con el confort absoluto.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-background-dark px-10 py-5 rounded-full font-headline font-bold flex items-center gap-3 transition-transform hover:scale-105 shadow-xl">
                  Ver Proyectos
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-headline font-bold hover:bg-white/20 transition-all">
                  Nuestra Metodología
                </button>
              </div>
                */}
            </div>
          </div>
        </section>
        {/* Quick Links / Services */}
        <section className="py-24 bg-surface px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Nuestras Especialidades</h2>
                <div className="h-1 w-20 bg-primary" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Diseño de Cocinas */}
              <a href="/proyectos" className="group block bg-surface-container-low p-2 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <img alt="Diseño de Cocinas" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Diseñamos tu cocina con alta calidad y ergonomía." src={getImageUrl("/images/HOME_web/Proyectos_Cocinas_Portada-640.jpg")} />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="px-6 pb-6">
                  <h3 className="font-headline text-xl font-bold mb-3">Proyectos de Cocinas</h3>
                  <p className="text-secondary text-sm mb-6 leading-relaxed">Diseñamos tu cocina con alta calidad y ergonomía.</p>
                  <span className="inline-flex items-center font-label text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-2 transition-all gap-1">
                    Explorar <span className="material-symbols-outlined text-sm">trending_flat</span>
                  </span>
                </div>
              </a>
              {/* Remodelaciones */}
              <a href="/proyectos/#remodelaciones" className="group block bg-surface-container-low p-2 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <img alt="Remodelaciones" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Realizamos desde el proyecto centrado en tus necesidades, hasta la construcción." src={getImageUrl("/images/HOME_web/Proyectos_Remodelaciones_Portada-640.jpg")} />
                </div>
                <div className="px-6 pb-6">
                  <h3 className="font-headline text-xl font-bold mb-3">Remodelaciones</h3>
                  <p className="text-secondary text-sm mb-6 leading-relaxed">Realizamos desde el proyecto centrado en tus necesidades, hasta la construcción.</p>
                  <span className="inline-flex items-center font-label text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-2 transition-all gap-1">
                    Explorar <span className="material-symbols-outlined text-sm">trending_flat</span>
                  </span>
                </div>
              </a>
              {/* Equipamiento */}
              <a href="/proyectos/#equipamiento" className="group block bg-surface-container-low p-2 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <img alt="Equipamiento" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Mobiliario ergonómico centrado en el habitar de los entornos." src={getImageUrl("/images/HOME_web/Proyectos_Equipamiento_Portada-640.jpg")} />
                </div>
                <div className="px-6 pb-6">
                  <h3 className="font-headline text-xl font-bold mb-3">Equipamiento</h3>
                  <p className="text-secondary text-sm mb-6 leading-relaxed">Mobiliario ergonómico centrado en el habitar de los entornos.</p>
                  <span className="inline-flex items-center font-label text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-2 transition-all gap-1">
                    Explorar <span className="material-symbols-outlined text-sm">trending_flat</span>
                  </span>
                </div>
              </a>
              {/* Ergología */}
              <a href="/ergologia" className="group block bg-primary p-2 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden text-background-dark">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <img alt="Equipamiento" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Línea de muebles modulares diseñada bajo parámetros ergonómicos." src={getImageUrl("/images/HOME_web/Proyectos_Ergologia_Portada.jpg")} />
                </div>
                <div className="px-6 pb-6 relative z-10">
                  <h3 className="font-headline text-xl font-bold mb-3 text-background-dark">Ergo-logía</h3>
                  <p className="text-sm mb-6 leading-relaxed text-background-dark/80">Línea de muebles modulares diseñada bajo parámetros ergonómicos.</p>
                  <span className="inline-flex items-center font-label text-xs font-bold uppercase tracking-widest text-background-dark group-hover:gap-2 transition-all gap-1">
                    Explorar <span className="material-symbols-outlined text-sm">trending_flat</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* Technical Sanctuary (Asymmetric Layout) */}
        <section className="py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                {/* High Contrast Editorial Pairing */}
                <div className="mb-12">
                  {/*<h4 className="font-label text-xs uppercase tracking-[0.4em] text-primary font-bold mb-4">The Technical Sanctuary</h4>*/}
                  <h2 className="font-headline text-5xl font-extrabold tracking-tight leading-none mb-8">Enfoque <br /> <span className="text-outline">Ergohome</span></h2>
                </div>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="bg-surface-container-lowest p-3 rounded-full shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-primary pt-1">conditions</span>
                    </div>
                    <div>
                      <h5 className="font-headline font-bold mb-2">Sostenibilidad Humana</h5>
                      <p className="text-secondary text-sm">Entendida como la capacidad de diseñar y gestionar sistemas sociales y tecnológicos que respeten y se adapten a las necesidades, capacidades y límites del ser humano, promoviendo su bienestar físico, mental y social en distintos entornos y etapas de la vida.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="bg-surface-container-lowest p-3 rounded-full shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-primary pt-1">center_focus_strong</span>
                    </div>
                    <div>
                      <h5 className="font-headline font-bold mb-2x">Diseño Centrado en las Personas</h5>
                      <p className="text-secondary text-sm">Un hogar debe ser funcional y bello para todos, aplicamos metodologías centradas en las personas para crear ambientes que hagan la diferencia.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden aspect-[3/4] shadow-lg">
                    <img alt="Soluciones de almacenamiento ergonómicas" className="w-full h-full object-cover" style={{ objectPosition: '-50px center' }} data-alt="Ergo-logía" src={getImageUrl("/images/HOME_web/Proyectos_Ergologia_Portada.jpg")} />
                  </div>
                  <div className="bg-primary-container p-6 rounded-xl aspect-square flex flex-col justify-end">
                    <span className="font-label text-2xl font-bold text-on-primary-container mb-2">Diseño funcional, vida familiar plena</span>
                    {/*<p className="text-on-primary-container text-xs font-bold leading-tight">Diseño funcional, vida familiar plena.</p>*/}
                  </div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="bg-surface-container-highest rounded-xl aspect-square relative overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-8xl text-outline-variant/30">architecture</span>
                    </div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h6 className="font-label text-2xl font-bold text-secondary mb-2">Innovación habitacional centrada en las personas</h6>
                      {/*<p className="text-[10px] text-secondary">Innovación habitacional centrada en las personas.</p>*/}
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-[3/4] shadow-lg">
                    <img className="w-full h-full object-cover" style={{ objectPosition: '-130px center' }} src={getImageUrl("/images/PROYECTOS_web/COCINAS/Proyectos_Cocinas_SuperficiedeTrabajo_01-640.jpg")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}