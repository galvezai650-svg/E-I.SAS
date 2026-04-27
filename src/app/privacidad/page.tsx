'use client'

import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { Separator } from '@/components/ui/separator'
import { ChevronRight, Shield } from 'lucide-react'
import Link from 'next/link'
import { companyInfo } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

export default function PrivacidadPage() {
  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-[#0a1628] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm"
          >
            <Link href="/" className="text-white/50 hover:text-brand-light transition-colors duration-300">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <span className="text-brand-light font-medium">Política de Privacidad</span>
          </motion.nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-[#0a1628] pb-16 pt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 mb-6">
              <Shield className="w-7 h-7 text-brand" />
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Política de Privacidad
            </h1>
            <p className="text-white/50 text-sm">
              Última actualización: marzo de 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="prose prose-gray max-w-none"
          >
            {/* Intro */}
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              En {companyInfo.name}, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos la información personal que usted nos proporciona al utilizar nuestro sitio web y nuestros servicios.
            </p>

            <Separator className="my-8" />

            {/* Section 1 */}
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                1. Información que Recopilamos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Podemos recopilar los siguientes tipos de información personal:
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-8">
                <li><strong className="text-gray-800">Datos de contacto:</strong> nombre completo, correo electrónico, número de teléfono y dirección, cuando usted nos contacta a través de nuestros formularios o canales de comunicación.</li>
                <li><strong className="text-gray-800">Información de proyectos:</strong> datos relacionados con solicitudes de cotización, consultas sobre servicios y preferencias de proyecto.</li>
                <li><strong className="text-gray-800">Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia y otras métricas de uso del sitio web recopiladas automáticamente mediante cookies y tecnologías similares.</li>
                <li><strong className="text-gray-800">Información de comunicaciones:</strong> contenido de los mensajes que nos envía a través de formularios de contacto, correo electrónico o WhatsApp.</li>
              </ul>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 2 */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                2. Finalidad del Tratamiento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizamos la información recopilada para las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-8">
                <li>Responder a sus consultas, solicitudes de cotización y requerimientos de información.</li>
                <li>Gestionar la relación comercial y brindar los servicios de ingeniería y construcción solicitados.</li>
                <li>Enviar comunicaciones relacionadas con nuestros servicios, siempre que usted haya otorgado su consentimiento.</li>
                <li>Mejorar nuestro sitio web, servicios y experiencia de usuario.</li>
                <li>Cumplir con obligaciones legales y reglamentarias aplicables.</li>
                <li>Elaborar estadísticas internas y análisis de tendencias de uso.</li>
              </ul>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 3 */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                3. Protección de Datos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Implementamos medidas de seguridad técnicas, administrativas y organizativas adecuadas para proteger su información personal contra accesos no autorizados, alteraciones, divulgación o destrucción. Estas medidas incluyen cifrado de datos en tránsito, controles de acceso restringido y respaldos periódicos de la información.
              </p>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 4 */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                4. Compartir Información con Terceros
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros con fines comerciales. Podemos compartir información únicamente en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-8">
                <li>Con proveedores de servicios que nos asisten en la operación del sitio web y la prestación de nuestros servicios, bajo acuerdos de confidencialidad.</li>
                <li>Cuando sea requerido por ley, orden judicial o autoridad competente.</li>
                <li>Para proteger nuestros derechos, propiedad o seguridad, o los de terceros.</li>
              </ul>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 5 */}
            <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                5. Cookies y Tecnologías Similares
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nuestro sitio web utiliza cookies y tecnologías de seguimiento para mejorar la experiencia de navegación y recopilar información sobre el uso del sitio. Usted puede configurar su navegador para rechazar cookies, sin embargo, algunas funcionalidades del sitio podrían verse afectadas.
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-8">
                <li><strong className="text-gray-800">Cookies esenciales:</strong> necesarias para el funcionamiento básico del sitio.</li>
                <li><strong className="text-gray-800">Cookies de análisis:</strong> nos ayudan a comprender cómo los usuarios interactúan con el sitio.</li>
                <li><strong className="text-gray-800">Cookies de preferencias:</strong> permiten recordar sus configuraciones y preferencias.</li>
              </ul>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 6 */}
            <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                6. Derechos del Titular de los Datos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                De conformidad con la Ley Estatutaria 1581 de 2012 (Ley de Protección de Datos Personales de Colombia), usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-8">
                <li>Conocer, actualizar y rectificar sus datos personales.</li>
                <li>Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
                <li>Ser informado sobre el uso que se le ha dado a sus datos personales.</li>
                <li>Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.</li>
                <li>Revocar la autorización y/o solicitar la supresión de sus datos personales.</li>
                <li>Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</li>
              </ul>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 7 */}
            <motion.div custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                7. Conservación de Datos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas en esta política, o según lo requieran las disposiciones legales aplicables. Una vez cumplida la finalidad, los datos serán eliminados o anonimizados de forma segura.
              </p>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 8 */}
            <motion.div custom={7} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                8. Cambios a esta Política
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente. Le recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos su información.
              </p>
            </motion.div>

            <Separator className="my-8" />

            {/* Contact */}
            <motion.div custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                9. Contacto
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Si tiene preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o el tratamiento de sus datos personales, puede contactarnos a través de:
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <ul className="space-y-2 text-gray-600">
                  <li><strong className="text-gray-800">Empresa:</strong> {companyInfo.name}</li>
                  <li><strong className="text-gray-800">Correo electrónico:</strong> {companyInfo.email}</li>
                  <li><strong className="text-gray-800">Teléfono:</strong> {companyInfo.phone}</li>
                  <li><strong className="text-gray-800">Dirección:</strong> {companyInfo.address}</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
