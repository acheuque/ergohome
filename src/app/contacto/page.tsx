"use client";

import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getImageUrl } from "@/utils/imagePath";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    // Validaciones Frontend Explícitas
    if (!formData.name.trim()) {
      setStatus("error");
      setResponseMessage("Por favor, ingresa tu nombre completo.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setResponseMessage("Por favor, ingresa un correo válido.");
      return;
    }

    if (formData.message.trim().length === 0 || formData.message.length > 1500) {
      setStatus("error");
      setResponseMessage("El mensaje es requerido y no debe superar los 1500 caracteres.");
      return;
    }

    if (typeof window !== 'undefined' && (window as any).grecaptcha) {
      (window as any).grecaptcha.enterprise.ready(async () => {
        try {
          const token = await (window as any).grecaptcha.enterprise.execute('6LdUoaUsAAAAACta8oXLlYocvXcZw_rp41Q5jSbs', { action: 'LOGIN' });

          // Enviar los datos al script PHP
          const payload = {
            ...formData,
            token
          };

          const res = await fetch("/send-email.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });

          const data = await res.json();

          if (res.ok) {
            setStatus("success");
            setResponseMessage(data.message || "Tu mensaje ha sido enviado exitosamente.");
            setFormData({ name: "", email: "", subject: "", message: "" });
          } else {
            setStatus("error");
            setResponseMessage(data.message || "Ocurrió un error al intentar enviar tu mensaje.");
          }

        } catch (error) {
          console.error("Error validando la petición con reCAPTCHA o backend:", error);
          setStatus("error");
          setResponseMessage("Error inesperado en nuestra validación de seguridad. Refresque la página.");
        }
      });
    } else {
      setStatus("error");
      setResponseMessage("Google reCAPTCHA no pudo cargar correctamente, verifica tu conexión.");
    }
  };

  return (
    <>
      <Script src="https://www.google.com/recaptcha/enterprise.js?render=6LdUoaUsAAAAACta8oXLlYocvXcZw_rp41Q5jSbs" strategy="afterInteractive" />
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
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant/80 font-bold px-1" htmlFor="name">Nombre Completo</label>
                  <input required value={formData.name} onChange={handleChange} className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-4 py-4 text-on-surface placeholder-on-surface-variant/30 rounded-t-lg" id="name" placeholder="Ej: Julian Ergo" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant/80 font-bold px-1" htmlFor="email">Email Corporativo</label>
                  <input required value={formData.email} onChange={handleChange} className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-4 py-4 text-on-surface placeholder-on-surface-variant/30 rounded-t-lg" id="email" placeholder="julian@empresa.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant/80 font-bold px-1" htmlFor="subject">Asunto</label>
                <input required value={formData.subject} onChange={handleChange} className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-4 py-4 text-on-surface placeholder-on-surface-variant/30 rounded-t-lg" id="subject" placeholder="¿Cómo podemos ayudarle?" type="text" />
              </div>
              <div className="space-y-2 relative">
                <label className="flex items-center justify-between font-label text-xs uppercase tracking-widest text-on-surface-variant/80 font-bold px-1" htmlFor="message">
                  <span>Mensaje</span>
                  <span className={`lowercase tracking-normal font-normal ${formData.message.length > 1490 ? 'text-red-500' : 'text-zinc-500'}`}>{formData.message.length}/1500</span>
                </label>
                <textarea required maxLength={1500} value={formData.message} onChange={handleChange} className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all px-4 py-4 text-on-surface placeholder-on-surface-variant/30 rounded-t-lg resize-none" id="message" placeholder="Describa su proyecto o necesidad técnica..." rows={4} />
              </div>

              {responseMessage && (
                <div className={`p-4 rounded-xl text-sm font-body ${status === 'success' ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-error-container text-on-error-container'}`}>
                  {responseMessage}
                </div>
              )}

              <div className="pt-4">
                <p className="text-[10px] text-zinc-400 mb-6 text-center max-w-sm mx-auto">
                  Este sitio está protegido por reCAPTCHA Enterprise y aplican su <a href="https://policies.google.com/privacy" className="underline" rel="noreferrer" target="_blank">Política de Privacidad</a> y <a href="https://policies.google.com/terms" className="underline" rel="noreferrer" target="_blank">Términos de Servicio</a>.
                </p>
                <button disabled={status === "loading"} className="w-full bg-[#EFC820] text-zinc-900 font-headline font-bold py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3" type="submit">
                  {status === "loading" ? "Procesando..." : "Enviar Solicitud"}
                  <span className="material-symbols-outlined">{status === "loading" ? "hourglass_empty" : "send"}</span>
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