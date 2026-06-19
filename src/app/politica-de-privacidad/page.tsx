import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Ergohome',
  description: 'Conoce la Política de Privacidad de Ergohome y cómo cuidamos tus datos.',
};

export default function PoliticaDePrivacidad() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6">Política de Privacidad</h1>

          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>En <strong className="text-on-surface font-bold">Ergohome</strong> valoramos y respetamos la privacidad de las personas que visitan nuestro sitio web. Esta Política de Privacidad explica qué datos recopilamos, cómo los utilizamos y bajo qué condiciones pueden ser tratados al interactuar con nuestro sitio.</p>

            <p>Al utilizar este sitio web o enviarnos información a través de sus formularios, aceptas lo dispuesto en esta Política de Privacidad.</p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-10 mb-4">1. Responsable del tratamiento de los datos</h2>
            <p>El responsable del tratamiento de los datos personales recopilados a través de este sitio es:</p>
            <p>
              <strong className="text-on-surface font-bold">Ergohome SpA</strong><br />
              <strong className="text-on-surface font-bold">Nombre comercial:</strong> Ergohome<br />
              <strong className="text-on-surface font-bold">Domicilio:</strong> Santiago, Chile<br />
              <strong className="text-on-surface font-bold">Correo de contacto:</strong> <a href="mailto:contacto@ergohome.cl" className="text-primary font-medium hover:underline">contacto@ergohome.cl</a>
            </p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">2. Datos que recopilamos</h2>
            <p>Podemos recopilar información personal y técnica a través de nuestro sitio web.</p>

            <h3 className="text-xl font-headline font-semibold text-on-surface mt-8 mb-2">a) Datos entregados por el usuario en el formulario de contacto</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Asunto</li>
              <li>Mensaje</li>
            </ul>

            <h3 className="text-xl font-headline font-semibold text-on-surface mt-8 mb-2">b) Datos entregados por el usuario en formularios promocionales</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre</li>
              <li>Correo electrónico</li>
            </ul>

            <h3 className="text-xl font-headline font-semibold text-on-surface mt-8 mb-2">c) Datos de navegación e información técnica</h3>
            <p>También podemos recopilar cierta información técnica o de uso del sitio, como por ejemplo:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>dirección IP</li>
              <li>tipo de navegador</li>
              <li>sistema operativo</li>
              <li>páginas visitadas</li>
              <li>duración de la visita</li>
              <li>interacciones con el sitio</li>
              <li>datos obtenidos mediante cookies o tecnologías similares</li>
            </ul>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">3. Finalidad del tratamiento de los datos</h2>
            <p>Los datos personales recopilados a través del sitio podrán ser utilizados para las siguientes finalidades:</p>

            <h3 className="text-xl font-headline font-semibold text-on-surface mt-8 mb-2">a) Consultas y contacto</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>responder consultas, solicitudes o mensajes enviados por los usuarios</li>
              <li>gestionar el contacto solicitado</li>
              <li>mantener registro de las comunicaciones realizadas</li>
              <li>evaluar eventuales oportunidades comerciales, cotizaciones o reuniones</li>
            </ul>

            <h3 className="text-xl font-headline font-semibold text-on-surface mt-8 mb-2">b) Descarga de material promocional</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>enviar o descargar el material solicitado, como guías, plantillas o archivos similares</li>
              <li>contactar a personas interesadas en nuestros contenidos o servicios</li>
              <li>realizar seguimiento comercial relacionado con los servicios de Ergohome</li>
              <li>enviar comunicaciones informativas o promocionales relacionadas con nuestros servicios, contenidos o campañas</li>
            </ul>

            <h3 className="text-xl font-headline font-semibold text-on-surface mt-8 mb-2">c) Funcionamiento, análisis y mejora del sitio</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>medir el tráfico y uso del sitio web</li>
              <li>analizar el comportamiento de navegación</li>
              <li>mejorar la experiencia del usuario</li>
              <li>evaluar el rendimiento del sitio y de campañas publicitarias</li>
              <li>realizar seguimiento de conversiones y resultados de acciones de marketing</li>
            </ul>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">4. Origen de los datos</h2>
            <p>Los datos personales tratados por Ergohome provienen principalmente de la información que el propio usuario entrega de manera voluntaria al completar formularios del sitio o al contactarse con nosotros.</p>
            <p>Asimismo, ciertos datos técnicos pueden recopilarse automáticamente mediante herramientas de análisis, seguridad y seguimiento utilizadas en el sitio.</p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">5. Herramientas y servicios de terceros</h2>
            <p>Para operar el sitio y apoyar sus funciones, Ergohome puede utilizar servicios prestados por terceros, incluyendo:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-on-surface font-bold">Google Tag Manager</strong></li>
              <li><strong className="text-on-surface font-bold">Google Analytics</strong></li>
              <li><strong className="text-on-surface font-bold">Google reCAPTCHA</strong></li>
              <li><strong className="text-on-surface font-bold">Meta Pixel</strong></li>
              <li>otras herramientas tecnológicas que resulten necesarias para la operación del sitio, análisis de tráfico o gestión de campañas</li>
            </ul>
            <p>Estas herramientas pueden recopilar información técnica, de navegación o interacción con el sitio, de acuerdo con sus propias políticas de privacidad y condiciones de servicio.</p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">6. Cookies y tecnologías similares</h2>
            <p>Este sitio puede utilizar cookies y tecnologías similares con fines técnicos, analíticos, de seguridad y de medición.</p>
            <p>Estas herramientas pueden permitir, entre otras cosas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>recordar ciertas preferencias de navegación</li>
              <li>analizar el tráfico del sitio</li>
              <li>medir campañas de marketing</li>
              <li>detectar actividad sospechosa o automatizada</li>
            </ul>
            <p>Actualmente, el sitio utiliza herramientas como <strong className="text-on-surface font-bold">Google Tag Manager</strong>, <strong className="text-on-surface font-bold">Google Analytics</strong> y <strong className="text-on-surface font-bold">reCAPTCHA</strong>, y podrá incorporar <strong className="text-on-surface font-bold">Meta Pixel</strong>.</p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">7. Sobre el uso y cesión de los datos</h2>
            <p>Ergohome <strong className="text-on-surface font-bold">no vende</strong> los datos personales de los usuarios.</p>
            <p>Los datos personales podrán ser tratados o alojados por proveedores tecnológicos estrictamente necesarios para el funcionamiento del sitio, la gestión de formularios, el almacenamiento de información, la medición de tráfico, la seguridad del sitio o la ejecución de campañas digitales.</p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">8. Conservación de los datos</h2>
            <p>Los datos personales serán conservados solo durante el tiempo necesario para cumplir las finalidades para las cuales fueron recopilados.</p>
            <p>Como referencia general:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>los datos enviados mediante el <strong className="text-on-surface font-bold">formulario de contacto</strong> podrán conservarse hasta por <strong className="text-on-surface font-bold">24 meses</strong></li>
              <li>los datos enviados mediante <strong className="text-on-surface font-bold">formularios promocionales o campañas</strong> podrán conservarse hasta de forma indefinida.</li>
            </ul>
            <p>Lo anterior, sin perjuicio de que los datos puedan eliminarse antes si el titular solicita su eliminación o desuscripción, cuando ello sea legal y técnicamente procedente.</p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">9. Derechos de los titulares de los datos</h2>
            <p>Las personas que entreguen sus datos personales a través del sitio podrán solicitar, según corresponda:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>eliminación de sus datos</li>
              <li>retiro del consentimiento para futuras comunicaciones</li>
              <li>desuscripción de comunicaciones promocionales</li>
            </ul>
            <p>Para ejercer cualquiera de estos derechos, el usuario podrá escribir a:</p>
            <p><strong className="text-on-surface font-bold"><a href="mailto:contacto@ergohome.cl" className="text-primary hover:underline">contacto@ergohome.cl</a></strong></p>
            <p>La solicitud deberá realizarse desde el mismo correo electrónico respecto del cual se solicita la modificación, eliminación o desuscripción.</p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">10. Desuscripción de comunicaciones</h2>
            <p>Si un usuario desea dejar de recibir comunicaciones promocionales o de seguimiento comercial, podrá solicitarlo enviando un correo a <a href="mailto:contacto@ergohome.cl" className="text-primary hover:underline font-medium">contacto@ergohome.cl</a>, indicando expresamente su voluntad de desuscribirse.</p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">11. Seguridad de la información</h2>
            <p>Ergohome adopta medidas razonables de seguridad para proteger los datos personales frente a accesos no autorizados, pérdida, alteración o divulgación indebida.</p>
            <p>Sin perjuicio de lo anterior, ningún sistema de almacenamiento o transmisión de información a través de internet puede garantizar seguridad absoluta.</p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">12. Enlaces a terceros</h2>
            <p>Este sitio puede contener enlaces a sitios web de terceros. Ergohome no es responsable del contenido, funcionamiento ni de las políticas de privacidad de dichos sitios externos, por lo que se recomienda revisarlas de manera independiente.</p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">13. Menores de edad</h2>
            <p>Este sitio web no está dirigido específicamente a menores de 18 años, sino a personas interesadas en servicios de diseño, consultoría, organización de espacios y soluciones relacionadas con el hogar.</p>
            <p>Ergohome no busca recopilar intencionalmente datos personales de menores de edad. Si se detecta que se ha recibido información de un menor sin la debida autorización de su representante legal, dicha información podrá ser eliminada si los representantes legales lo solicitan enviando un correo a <a href="mailto:contacto@ergohome.cl" className="text-primary hover:underline font-medium">contacto@ergohome.cl</a>, indicando expresamente su voluntad de eliminación.</p>

            <h2 className="text-2xl font-headline font-bold text-on-surface mt-12 mb-4">14. Cambios a esta Política de Privacidad</h2>
            <p>Ergohome podrá modificar o actualizar esta Política de Privacidad en cualquier momento, para reflejar cambios legales, técnicos, operativos o relacionados con el funcionamiento del sitio y sus servicios.</p>
            <p>Cualquier modificación será publicada en esta misma página, indicando la fecha de su última actualización.</p>

            <p className="mt-12 text-sm text-on-surface-variant font-bold">Última actualización: 17 de Junio de 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
