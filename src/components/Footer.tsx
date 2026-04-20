export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 w-full py-12 px-8 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
        <div className="space-y-4">
          <div className="text-lg font-bold text-zinc-800 dark:text-zinc-200">Ergohome</div>
          <p className="font-body text-sm leading-relaxed text-zinc-500 max-w-xs">
            Llevamos la ergonomía y el diseño de vanguardia a los espacios más importantes de tu vida cotidiana.
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-headline font-bold text-zinc-800 dark:text-zinc-200 text-sm mb-2">Explora</h4>
          <a className="text-zinc-500 dark:text-zinc-500 hover:text-orange-500 transition-colors font-body text-sm hover:underline decoration-orange-500 underline-offset-4" href="/proyectos">Proyectos</a>
          <a className="text-zinc-500 dark:text-zinc-500 hover:text-orange-500 transition-colors font-body text-sm hover:underline decoration-orange-500 underline-offset-4" href="/ergologia">Ergo-logía</a>
          <a className="text-zinc-500 dark:text-zinc-500 hover:text-orange-500 transition-colors font-body text-sm hover:underline decoration-orange-500 underline-offset-4" href="/nosotros">Nosotros</a>
          <a className="text-zinc-500 dark:text-zinc-500 hover:text-orange-500 transition-colors font-body text-sm hover:underline decoration-orange-500 underline-offset-4" href="/contacto">Contacto</a>
        </div>
        <div className="flex flex-col">
          <h4 className="font-headline font-bold text-zinc-800 dark:text-zinc-200 text-sm mb-2">Redes</h4>
          <a className="text-zinc-500 dark:text-zinc-500 hover:text-orange-500 transition-colors font-body text-sm hover:underline decoration-orange-500 underline-offset-4" href="https://www.instagram.com/ergohome_proyectos/" target="_blank" rel="noopener noreferrer">Instagram</a>
          {/*<a className="text-zinc-500 dark:text-zinc-500 hover:text-orange-500 transition-colors font-body text-sm hover:underline decoration-orange-500 underline-offset-4" href="#">LinkedIn</a>*/}
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
        <p className="font-body text-xs text-zinc-400">© 2026 Ergohome. Ergonomía + Diseño</p>
      </div>
    </footer>
  );
}
