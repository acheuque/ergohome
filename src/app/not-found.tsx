import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto w-full relative">
        <div className="technical-grid absolute inset-0 opacity-20 pointer-events-none" />

        <div className="text-center space-y-6 max-w-2xl mx-auto relative z-10">
          <h1 className="font-headline text-8xl md:text-9xl font-extrabold tracking-tighter leading-none text-on-surface">
            404
          </h1>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface-variant">
            Página no encontrada
          </h2>

          <p className="font-body text-lg text-secondary leading-relaxed pt-2 max-w-lg mx-auto">
            Es posible que el proyecto haya sido reubicado o la dirección contenga un error.
          </p>

          <div className="pt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-[#EFC820] text-zinc-900 font-headline font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span className="material-symbols-outlined text-xl">home</span>
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
