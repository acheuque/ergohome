"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function CampaignBlock() {
  const searchParams = useSearchParams();
  const campaign = searchParams.get("utm_campaign");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorObj, setErrorObj] = useState<string | null>(null);

  useEffect(() => {
    // Only fire the view event if the campaign matches
    if (campaign === "logia_printable") {
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "view_campaign_offer",
          campaign: "logia_printable"
        });
      }
    }
  }, [campaign]);

  // If the query param doesn't match, render nothing.
  if (campaign !== "logia_printable") {
    return null;
  }

  const handleFormStart = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "form_start",
        campaign: "logia_printable"
      });
    }
  };

  const handleDownload = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "download_printable",
        campaign: "logia_printable"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorObj(null);

    const payload = {
      name,
      email,
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_content: searchParams.get("utm_content") || "",
      landing_page: window.location.href,
      referrer: document.referrer || "",
    };

    try {
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "lead_submit",
          campaign: "logia_printable",
          lead_email: email
        });
      }

      const res = await fetch("/campaign-lead.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Error al procesar la solicitud.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setErrorObj(err.message || "Ocurrió un error inesperado.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-surface-container-highest to-surface-container-low px-6 py-8 md:p-10 mb-8 mt-10 max-w-4xl mx-auto rounded-3xl border-2 border-primary/50 shadow-2xl shadow-primary/20 relative overflow-visible transition-transform duration-500 hover:scale-[1.01]">

      {/* Floating Badge con animación de reflejo */}
      <div className="absolute -top-4 right-6 md:-right-4 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] transform rotate-2">
        <div className="relative overflow-hidden bg-primary text-black font-headline font-bold px-4 py-2 rounded-xl text-xs tracking-wide border border-black/10">
          ⭐ Regalo Exclusivo Instagram
          {/* El reflejo animado (shimmer) */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg] -translate-x-[150%] animate-[shimmerPass_2s_ease-in-out_0.5s_1_forwards]" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-between">
        {/* Left Side: Info text */}
        <div className="w-full md:w-5/12 text-center md:text-left z-10">
          <h2 className="text-2xl md:text-4xl font-headline font-extrabold text-on-surface leading-tight mb-3">
            Construye tu propia logia
          </h2>
          <p className="text-sm md:text-base text-secondary">
            Descarga nuestra guía imprimible gratuita y descubre los secretos
            para optimizar tu espacio de lavandería con Ergo-logia.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 bg-surface p-5 md:p-7 rounded-2xl shadow-xl border border-outline-variant/10">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-sm text-secondary text-center md:text-left">Déjanos tus datos para enviarte la plantilla a tu correo y descargarla al instante.</p>

              {errorObj && (
                <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm border border-red-200">
                  {errorObj}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="comp-name" className="text-xs font-bold text-on-surface">Nombre</label>
                  <input
                    id="comp-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={handleFormStart}
                    className="bg-surface-container px-4 py-2.5 rounded-xl text-sm border border-outline focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-secondary/50 font-body w-full"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="comp-email" className="text-xs font-bold text-on-surface">Email</label>
                  <input
                    id="comp-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleFormStart}
                    className="bg-surface-container px-4 py-2.5 rounded-xl text-sm border border-outline focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-secondary/50 font-body w-full"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-black mt-1 w-full py-3 rounded-xl text-sm font-headline font-bold hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
                ) : (
                  "Quiero mi plantilla de ergo-logia"
                )}
              </button>
              <p className="text-[10px] md:text-xs text-secondary/60 text-center">
                Tus datos están seguros con nosotros.
              </p>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center p-4 gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-1">
                <span className="material-symbols-outlined text-2xl">check_circle</span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold mb-1">¡Todo listo!</h3>
                <p className="text-sm text-secondary">
                  Hemos enviado una copia a <strong>{email}</strong>.
                </p>
              </div>

              <a
                href="/downloads/ergo-logia-recortable.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownload}
                download="Ergohome-Logia-Printable.pdf"
                className="bg-black text-white w-full py-3 rounded-xl text-sm font-headline font-bold flex items-center justify-center gap-2 hover:bg-black/80 transition-colors shadow-lg mt-2"
              >
                <span className="material-symbols-outlined text-xl">download</span>
                Descargar PDF
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
