import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getImageUrl } from "@/utils/imagePath";

export default function Nosotros() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="max-w-3xl">
            <span className="font-label text-primary uppercase tracking-widest text-xs font-bold mb-4 block">Nuestro Equipo</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
              Ergonomía y Diseño <br /><span className="text-primary italic">para la vida cotidiana</span>
            </h1>
            {/* <p className="text-lg text-secondary leading-relaxed max-w-xl">
              Combinamos la precisión de la ergonómica con la calidez del diseño residencial para crear espacios que cuidan de ti.
            </p> */}
          </div>
        </section>
        {/* Professional Profiles Section */}
        <section className="max-w-7xl mx-auto px-8 space-y-32">
          {/* Profile 1: Maria Consuelo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
                <img alt="María Consuelo Zamora Paredes" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="María Consuelo Zamora Paredes, CEO y Fundadora" src={getImageUrl("/images/EQUIPO_web/Equipo_Presentacion_Consuelo_2-640.jpg")} />
              </div>
              {/* Technical Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-surface-container-lowest p-6 rounded-xl shadow-lg border border-outline-variant/20 max-w-[200px]">
                <span className="font-label text-[10px] uppercase text-outline block mb-2 tracking-widest">Experiencia</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-headline font-bold text-primary">18</span>
                  <span className="text-sm font-body font-medium text-secondary">años</span>
                </div>
                <p className="text-[11px] leading-tight text-on-surface-variant mt-2">En diseño y fabricación.</p>
              </div>
            </div>
            <div className="lg:col-span-7 pt-8 lg:pt-0">
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-2">María <span className="text-primary italic">Consuelo</span> Zamora Paredes</h2>
              <p className="font-label text-primary font-semibold text-lg mb-8 uppercase tracking-tight">CEO de Ergohome y Ergowork / Socia Fundadora</p>
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                <p>
                  Dieciocho años de experiencia en diseño y fabricación de muebles para proyectos para diversas inmobiliarias, especialidad en espacios domiciliarios. Desarrollo de proyectos personalizados a medida para casas particulares, empresas, centros de salud, etc., utilizando el diseño y la ergonomía en función de la optimización del espacio y funcionalidad.
                </p>
                <p>
                  Docente Pregrado y Postgrado: Universidad Católica, Universidad Mayor, Universidad Diego Portales y Universidad de las Américas.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                {/*
                <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">precision_manufacturing</span>
                  <span className="font-label text-xs font-medium">Especialista en Fabricación</span>
                </div>
                <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">architecture</span>
                  <span className="font-label text-xs font-medium">Diseño Técnico</span>
                </div>
                */}
                <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">school</span>
                  <span className="font-label text-xs font-medium">Diseñadora UDP &amp; Magíster en Ergonomía UPC</span>
                </div>

              </div>
            </div>
          </div>
          {/* Profile 2: Catalina Maria (Asymmetric Shift) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:flex-row-reverse">
            <div className="lg:col-span-7 lg:order-1 order-2">
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-2"><span className="text-primary italic">Catalina</span> María Pérez Vergara</h2>
              <p className="font-label text-primary font-semibold text-lg mb-8 uppercase tracking-tight">CEO de Ergowork / Socia Fundadora<br />Diseñadora Ergohome</p>
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                <p>
                  Amplia experiencia en asesoría de ergonomía para el diseño del entorno físico. Especialista en diseño centrado en el usuario e inclusión a través de diseño.
                </p>
                <p>
                  Docente Pregrado y Postgrado: Universidad Católica, Universidad Mayor, Universidad del Desarrollo.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">school</span>
                  <span className="font-label text-xs font-medium">Diseñadora UC & Magíster en Ergonomía UPC</span>
                </div>
                <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">workspace_premium</span>
                  <span className="font-label text-xs font-medium">Gestor de Inclusión</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-2 order-1 relative">
              <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
                <img alt="Catalina Maria Perez Vergara" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Retrato de Catalina Maria Perez Vergara, Diseñadora en Ergohome" src={getImageUrl("/images/EQUIPO_web/Equipo_Presentacion_Catalina-640.jpg")} />
              </div>
              {/* Ergología Modular Hint */}
              <div className="absolute -top-6 -left-6 bg-primary-container p-4 rounded-xl shadow-lg border-2 border-white max-w-[180px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-on-primary-container text-lg">biotech</span>
                  <span className="font-label text-[10px] font-bold text-on-primary-container uppercase tracking-widest">Metodología</span>
                </div>
                <p className="text-[11px] leading-tight text-on-primary-container font-medium">Enfoque en Inclusión y Diseño Centrado en el Usuario.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Values Section - Bento Grid */}
        <section className="max-w-7xl mx-auto px-8 mt-48">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10 md:col-span-2 flex flex-col justify-center">
              <div className="flex items-center gap-12">
                <div className="hidden sm:block">
                  <div className="w-24 h-24 rounded-full border-2 border-primary border-dashed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-6xl">diversity_3</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-2">Compromiso Ergohome</h3>
                  <p className="text-secondary leading-relaxed">Cada proyecto es una colaboración directa entre nuestro equipo y tus necesidades personales.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-container p-10 rounded-xl text-on-primary-container">
              <h3 className="font-headline text-2xl font-bold mb-4">Inclusión</h3>
              <p className="text-sm opacity-90 leading-relaxed mb-6">Diseñamos para todos. El diseño universal no es un lujo, es una necesidad fundamental para el bienestar del ser humano.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}