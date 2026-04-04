import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getImageUrl } from "@/utils/imagePath";

export default function ErgoLogia() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section: The Technical Sanctuary */}
        <section className="relative px-8 py-20 max-w-screen-2xl mx-auto overflow-hidden">
          <div className="technical-grid absolute inset-0 opacity-20 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            <div className="lg:col-span-7">
              <span className="font-label text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Sistema</span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-8">
                Ergo-logía <br /> <span className="text-outline">Sistematización del circuito de la ropa</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-2xl">
                Línea de muebles modulares para la logia, diseñada bajo parámetros ergonómicos, funcionales y estéticos, que ubica a las necesidades del ser humano en el centro.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <button className="bg-primary text-black px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-2 hover:shadow-lg transition-all">
                  Coreografía de Lavandería
                  <span className="material-symbols-outlined">arrow_downward</span>
                </button>
                <button className="bg-primary text-black px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-2 hover:shadow-lg transition-all">
                  Explorar Módulos
                  <span className="material-symbols-outlined">arrow_downward</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-square bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl relative">
                <img alt="Modular Laundry System" className="w-full h-full object-cover" data-alt="Modern minimalist laundry room modular cabinets" src={getImageUrl("/images/HOME_web/Proyectos_Ergologia_Portada.jpg")} />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
              {/* Overlapping Technical Chip */}
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-xl border border-outline-variant/15 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>conversion_path</span>
                  <span className="font-label text-sm font-bold tracking-tight">MÉTRICA ERGO</span>
                </div>
                <p className="font-body text-sm text-secondary leading-snug">Precisión milimétrica adaptada a la ergonomía del movimiento humano cotidiano.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Components Grid (Bento Style) */}
        <section className="bg-surface-container-low px-8 py-24">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline text-3xl font-bold mb-8">Coreografía de Lavandería</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div>
                      <h5 className="font-bold mb-1">Sistematización del circuito de la ropa</h5>
                      <p className="text-sm text-secondary">
                        La dispersión de tareas genera diversas problemáticas, entender la secuencia de actividades y sus necesidades, independiente de la distribución arquitectónica de los espacios en la vivienda, permite desarrollar espacios que acojan al usuario y facilite la vida cotidiana.
                        <br />Ergo-logia es una línea de muebles modulares combinables según el espacio y las necesidades incluyendo también en sus diseños principios del diseño universal.</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="relative p-2 border-2 border-dashed border-outline-variant/30 rounded-xl">
                <div className="bg-surface-container-highest flex items-center justify-center rounded-xl">
                  <img alt="Coreografía de Lavandería" className="w-full h-full object-cover" data-alt="Diagrama de la coreografía de lavandería" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Coreografia.png")} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Galería de Detalles: Asymmetrical Layout */}
        <section className="px-8 py-24 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-bold mb-6">Módulos</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-2xl">
              <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_01.jpg")} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_02.jpg")} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_03.jpg")} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_04.jpg")} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_05.jpg")} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_06.jpg")} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_07.jpg")} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_08.jpg")} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_09.jpg")} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_10.jpg")} />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_11.jpg")} />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl mt-8">
            <img className="w-full h-full object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("/images/PROYECTOS_web/ERGOLOGIA/Modulos/ErgoLogia_Modulos_Todos_texto.jpg")} />
          </div>


        </section>


      </main>
      <Footer />
    </>
  );
}