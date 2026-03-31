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
              <span className="inline-block bg-primary-container text-on-primary-container px-4 py-1 rounded-full font-label text-xs font-bold uppercase tracking-widest mb-6">Metodología Ergohome</span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-8">
                Ergo-logía: Diseño modular que optimiza tu espacio
              </h1>
              <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-2xl">
                Optimiza funciones según las necesidades. Creamos sistemas inteligentes donde cada elemento tiene un propósito técnico y estético.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <button className="bg-primary text-black px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-2 hover:shadow-lg transition-all">
                  Explorar Módulos
                  <span className="material-symbols-outlined">arrow_downward</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-square bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl relative">
                <img alt="Modular Laundry System" className="w-full h-full object-cover" data-alt="Modern minimalist laundry room modular cabinets" src={getImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuB-8Opl6V0MOV60f-GBjz2eHEspn_1SF38Wxap6foZcRglLSZL-3O0i7Wr7XiL8-p0kkCDuLX_ydEmt1i7tqpA2cT5_YIBcd922uo0ZQF-c-tBNcRyOka0EB7Ed1hqEkLexn9Qad3_SVVWLTWWt7FTL9LsZGGfGzZf1O2Q8cwohpNBxr-xVf_SusDRzZ7U3RsvlIi3YD7V1Ev4t_8cUAwbGk2nsbR7AMzb0fJ-5p_qii8gD9csSUcRdLZWGf-RiXwTkFtCENhhPZvs")} />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
              {/* Overlapping Technical Chip */}
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-xl border border-outline-variant/15 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>architecture</span>
                  <span className="font-label text-sm font-bold tracking-tight">MÉTRICA ERGO</span>
                </div>
                <p className="font-body text-sm text-secondary leading-snug">Precisión milimétrica adaptada a la ergonomía del movimiento humano cotidiano.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Components Grid (Bento Style) */}
        <section className="bg-surface-container-low px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Componentes Principales</h2>
              <p className="text-secondary max-w-xl mx-auto">Nuestra arquitectura modular permite una integración fluida de las tareas domésticas en el hogar moderno.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* CESTA ROPA SUCIA */}
              <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-12">
                  <span className="bg-secondary-container p-3 rounded-lg">
                    <span className="material-symbols-outlined text-on-secondary-container">laundry</span>
                  </span>
                  <span className="font-label text-xs text-outline font-bold tracking-widest">MOD-01</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-3">CESTA ROPA SUCIA</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6">Integración oculta con sistema de ventilación pasiva y extracción ergonómica.</p>
                <div className="h-40 bg-surface rounded-lg overflow-hidden">
                  <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Minimalist wooden laundry sorting basket module" src={getImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuCNmN7Zal-AMhXEBdeWzyYeSKYarhMdqMQCZAjjIKIRP4JNsOeijmi97jxsqlbaBgzc6gQuLipc4z_RM7w_X7FglUFplZwhtz6ohsuZ9Iyd7jqjfdMeudYksMnRqu-WamwChrlrKQ4aTc3S6H83xqilK4-i63wDNVuQNzieOoiYziiN8iVK8-QACo9RnRrpAF_Tds1SgAjeeCEKd_RYknndqMkBKh8MBjOimFAvpk7vqDwvwVzfopJcdfxIkJuPrGifeo7A0pE-YCs")} />
                </div>
              </div>
              {/* LAVADERO */}
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-12">
                  <span className="bg-secondary-container p-3 rounded-lg">
                    <span className="material-symbols-outlined text-on-secondary-container">water_lux</span>
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-3">LAVADERO</h3>
                <p className="text-secondary text-sm leading-relaxed">Superficie técnica de alta resistencia con inclinación ergonómica.</p>
              </div>
              {/* LAVADORA/SECADORA */}
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: '"FILL" 1' }}>developer_board</span>
                  <h3 className="font-headline text-xl font-bold mb-3">SISTEMA INTEGRADO</h3>
                  <p className="text-secondary text-xs font-label font-bold mb-4">LAVADORA + SECADORA</p>
                </div>
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-surface-container" />
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-primary-container" />
                </div>
              </div>
              {/* TABLA DE PLANCHAR */}
              <div className="bg-primary-container p-8 rounded-xl hover:shadow-lg transition-all md:col-span-2">
                <div className="flex h-full flex-col justify-between">
                  <h3 className="font-headline text-3xl font-bold text-on-primary-container leading-tight">TABLA DE PLANCHAR <br /> ESCAMOTEABLE</h3>
                  <p className="text-on-primary-container/80 mt-4 max-w-sm">Sistema pivotante de alta precisión que desaparece tras el frente de armario.</p>
                  <div className="mt-8 flex items-center gap-2">
                    <span className="material-symbols-outlined">settings_overscan</span>
                    <span className="font-label text-sm font-bold">OPTIMIZACIÓN DE 100%</span>
                  </div>
                </div>
              </div>
              {/* CARRO Y ROPA LIMPIA */}
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/15 hover:shadow-md transition-shadow">
                <h3 className="font-headline text-lg font-bold mb-2">CESTA ROPA LIMPIA</h3>
                <p className="text-secondary text-xs mb-8">Apilabilidad modular.</p>
                <hr className="border-outline-variant/30 mb-8" />
                <h3 className="font-headline text-lg font-bold mb-2">CARRO MÓVIL</h3>
                <p className="text-secondary text-xs">Organización dinámica.</p>
              </div>
              <div className="bg-inverse-surface p-8 rounded-xl">
                <span className="material-symbols-outlined text-primary-container mb-4">dry_cleaning</span>
                <h3 className="font-headline text-xl font-bold text-white mb-3">TENDEDERO</h3>
                <p className="text-surface-variant text-sm">Sistemas de secado natural integrados con circulación de aire forzada.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Galería de Detalles: Asymmetrical Layout */}
        <section className="px-8 py-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl font-bold mb-6">Galería de Detalles</h2>
              <p className="text-secondary text-lg">La belleza reside en la ejecución técnica. Explore los acabados y mecanismos que definen la experiencia Ergología.</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-primary text-black px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-2 hover:shadow-lg transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="bg-primary text-black px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-2 hover:shadow-lg transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 relative group overflow-hidden rounded-2xl">
              <img className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Technical detail of modern cabinet hinge and wood finish" src={getImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuA9zWAwfqlRlWsuqO-kzlegSvSCej4PJdGI5OPg0v86yZiaMpCYh2zFymsXGaKbWODc_hLQUA5HpMSsG8aotpRbcbV79fuEHebWt1Juikzabgc1axwa55Gxm9A7y67bVWYpFtXkPcnt2a538AKBWitv1oV8sSkflLTeYCTWzlLLJYyo45auvQJz7OzI9J_I-ZO7HNX8lW6IBPTBZmZlpjd5jlAimCxnIUddEn8YcUXMpw2br0Qy9p-yJlG6DxHqhAPnwBwjgoA7-8w")} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                <div className="text-white">
                  <h4 className="font-headline text-2xl font-bold">Herrajes de Alta Precisión</h4>
                  <p className="text-surface-variant mt-2">Cierre suave y resistencia industrial para el hogar.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="h-1/2 bg-surface-container-low rounded-2xl overflow-hidden group">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="Close up of fabric textures and laundry accessories" src={getImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuBS3izEtayHsdOCTZQS1Pq4_XHaBn8cnDBsHSVMKX8MLfgueeeldV_DIEnLUZGVhQ2f3WvK_Qg21oTR2WjMahFFqr9tYvi3CvbAWlEcyuzdKVCa6VdOlQAO0oyHKbSaThWRTRYWd1Yefvya5VrHyiO32JdtZfQ0ie1d-lpRTm0MbFqaIulcpsgieqQLJK6Mr6oqLrSUQMmZ6k6XpzBSXP33BadtKUdEWahLIL4wzFhdjCdi12izk2VNl5bbnDKHJ8q4OKBmCXikYRA")} />
              </div>
              <div className="h-1/2 bg-primary-fixed p-10 rounded-2xl flex flex-col justify-center items-center text-center">
                <span className="font-label text-4xl font-bold text-on-primary-fixed mb-4">98%</span>
                <p className="font-body text-sm font-bold text-on-primary-fixed-variant tracking-wide">SATISFACCIÓN EN OPTIMIZACIÓN DE ESPACIO</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-highest p-10 rounded-2xl">
              <span className="material-symbols-outlined text-4xl mb-6">eco</span>
              <h4 className="font-headline text-xl font-bold mb-4">Sostenibilidad Modular</h4>
              <p className="text-secondary text-sm leading-relaxed">Materiales certificados con bajo impacto ambiental y alta durabilidad estructural.</p>
            </div>
            <div className="md:col-span-8 overflow-hidden rounded-2xl">
              <img className="w-full h-[300px] object-cover" data-alt="Wide shot of a completed laundry room project" src={getImageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuD5D79ECsCZshfXZMVtT1wf3gd4gNdRwFV26ex2JJL74RdJsRgU_i8b5HeDMi37AApfmI1tKmTk5Pn_F-7_jdEs9Egc2cEuIyfEoIQNNVrwPqU0sZfsf6UGf9xVMTLoM68mN6oo9okYaY2KMZcFdTLIpKii4sjdSELhwWIMRK6vlMeEdDh4wXUg2ybNwh8Drj9o44l8LwpTWbHdR33QttUdWOybD9OP1BUOcrN4GSeukU7uJhz3IsAFJSPdyAPXmmHi2xbRWHfp0yg")} />
            </div>
          </div>
        </section>
        {/* Technical Annotation Component */}
        <section className="bg-white py-24 border-y border-outline-variant/10">
          <div className="max-w-5xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline text-3xl font-bold mb-8">Ingeniería del Movimiento</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center font-label text-xs font-bold shrink-0">01</div>
                    <div>
                      <h5 className="font-bold mb-1">Alcance Óptimo</h5>
                      <p className="text-sm text-secondary">Módulos posicionados entre 60cm y 160cm para evitar fatiga lumbar.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center font-label text-xs font-bold shrink-0">02</div>
                    <div>
                      <h5 className="font-bold mb-1">Flujo de Trabajo</h5>
                      <p className="text-sm text-secondary">Secuencia lógica: Recepción → Clasificación → Lavado → Secado → Planchado.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center font-label text-xs font-bold shrink-0">03</div>
                    <div>
                      <h5 className="font-bold mb-1">Mantenimiento Zero</h5>
                      <p className="text-sm text-secondary">Frentes antibacterianos y repelentes al agua para una limpieza instantánea.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative p-8 border-2 border-dashed border-outline-variant/30 rounded-3xl">
                <div className="aspect-square bg-surface flex items-center justify-center">
                  <span className="material-symbols-outlined text-[120px] text-outline/20">straighten</span>
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/30" />
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-primary/30" />
                  {/* Annotation Chips */}
                  <div className="absolute top-1/4 right-1/4 bg-primary text-white text-[10px] font-label px-2 py-0.5 rounded-full">∠ 90° PRECISION</div>
                  <div className="absolute bottom-1/3 left-10 bg-secondary text-white text-[10px] font-label px-2 py-0.5 rounded-full">VAR. DIST: 600mm</div>
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