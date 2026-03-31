import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getImageUrl } from "@/utils/imagePath";

export default function Contacto() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-12">
            <header>
              <span className="font-label text-primary font-semibold tracking-widest uppercase text-xs mb-4 block">Hablemos</span>
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter leading-none mb-6">Diseño que cuida tu vida.</h1>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                Estamos listos para transformar tu espacio a través de la ergonomía y el diseño personalizado. Contáctanos para una asesoría.
              </p>
            </header>
            {/* Profile Card */}
            <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
              <div className="relative z-10 flex gap-6 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-surface-container-highest">
                  <img alt="Maria Consuelo Zamora Paredes" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Retrto de Maria Consuelo Zamora Paredes" src={getImageUrl("/images/EQUIPO_web/Equipo_Contacto_Consuelo.jpg")} />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold">Maria Consuelo Zamora Paredes</h3>
                  <p className="font-label text-sm text-primary mb-2">CEO y Socia Fundadora</p>
                  {/*<div className="flex flex-col gap-1 text-sm text-on-surface-variant">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">mail</span>
                      [Correo por definir]
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">call</span>
                      [Teléfono por definir]
                    </span>
                  </div>
                  */}
                </div>
              </div>
              {/* Aesthetic Detail */}
              <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-9xl">architecture</span>
              </div>
            </div>
            {/* Connect Section */}
            <div className="space-y-4">
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">Redes Sociales</p>
              <div className="flex gap-4">
                <a className="flex items-center gap-3 px-5 py-2 rounded-xl bg-surface-container-highest hover:bg-primary-container hover:text-on-primary-container transition-all group border border-transparent hover:border-outline-variant/30" href="https://www.instagram.com/ergohome_proyectos/" target="_blank">
                  <span className="font-label text-sm font-semibold">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          {/* Form Column */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0px_20px_40px_rgba(26,28,28,0.06)]">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant/80 font-bold px-1" htmlFor="name">Nombre Completo</label>
                  <input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-4 py-4 text-on-surface placeholder-on-surface-variant/30 rounded-t-lg" id="name" placeholder="Ej: Julian Ergo" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant/80 font-bold px-1" htmlFor="email">Email Corporativo</label>
                  <input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-4 py-4 text-on-surface placeholder-on-surface-variant/30 rounded-t-lg" id="email" placeholder="julian@empresa.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant/80 font-bold px-1" htmlFor="subject">Asunto</label>
                <input className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-4 py-4 text-on-surface placeholder-on-surface-variant/30 rounded-t-lg" id="subject" placeholder="¿Cómo podemos ayudarle?" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant/80 font-bold px-1" htmlFor="message">Mensaje</label>
                <textarea className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-4 py-4 text-on-surface placeholder-on-surface-variant/30 rounded-t-lg resize-none" id="message" placeholder="Describa su proyecto o necesidad técnica..." rows={4} defaultValue={""} />
              </div>
              <div className="pt-4">
                <div className="bg-surface-container-high/50 p-4 rounded-lg flex items-center justify-between border border-outline-variant/10 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 border-2 border-outline-variant/40 rounded flex items-center justify-center bg-white" />
                    <span className="text-sm font-medium text-on-surface-variant">No soy un robot</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img alt="reCAPTCHA" className="w-8 opacity-40" data-alt="Official reCAPTCHA security logo" src={getImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuBZabNd9MtTeQA0cfuhumML3P06rouRyU1L3W8lGqzrf3R-76aS9mUiKxG7J5yNtgMI9cGwr01yPfPaqXthgvudh7-zRRgn6u06SYz5kxh3dVrIl-HBxRwrDpZuhH2zGW2Vsk-eThd60_Mjg0ggL1XCrIeljCFuvtIAbOp9SHYLD0sPvz68Dgtkj1bx44YZ0ynqqkhJmnsOPfx7CC962R26yWDgH2oOZDpaWNkT2Y8OzesV9MO5uCuuaheXP9n7ITKnIywDoGiKAb8")} />
                    <span className="text-[10px] text-zinc-400">reCAPTCHA</span>
                  </div>
                </div>
                <button className="w-full bg-[#EFC820] text-zinc-900 font-headline font-bold py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3" type="submit">
                  Enviar Solicitud
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Technical Annotation In-set */}
        <div className="mt-20 border-t border-outline-variant/20 pt-12 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-primary" />
            <p className="font-label text-sm uppercase tracking-tighter text-on-surface-variant">Metodología Ergología™ Certificada</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-secondary-container/50 px-4 py-2 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span className="font-label text-[11px] font-bold">Datos Protegidos</span>
            </div>
            <div className="bg-secondary-container/50 px-4 py-2 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">speed</span>
              <span className="font-label text-[11px] font-bold">Respuesta &lt; 24h</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}