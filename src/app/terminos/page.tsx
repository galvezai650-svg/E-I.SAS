'use client'

import { motion } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { Separator } from '@/components/ui/separator'
import { ChevronRight, FileText } from 'lucide-react'
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

export default function TerminosPage() {
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
            <span className="text-brand-light font-medium">Términos de Uso</span>
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
              <FileText className="w-7 h-7 text-brand" />
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Términos de Uso
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
              Bienvenido al sitio web de {companyInfo.name}. Al acceder y utilizar nuestro sitio web, usted acepta los siguientes Términos de Uso. Le recomendamos leerlos detenidamente antes de continuar navegando.
            </p>

            <Separator className="my-8" />

            {/* Section 1 */}
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                1. Aceptación de los Términos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Al acceder, navegar o utilizar nuestro sitio web, usted reconoce haber leído, comprendido y aceptado estar vinculado por estos Términos de Uso. Si no está de acuerdo con alguno de estos términos, le solicitamos abstenerse de utilizar nuestro sitio web.
              </p>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 2 */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                2. Uso del Sitio Web
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Usted se compromete a utilizar nuestro sitio web exclusivamente con fines legítimos y de conformidad con estos términos. Queda expresamente prohibido:
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-8">
                <li>Utilizar el sitio web de manera que pueda dañar, deshabilitar, sobrecargar o deteriorar el funcionamiento del mismo.</li>
                <li>Acceder a áreas restringidas del sitio sin autorización.</li>
                <li>Recopilar información sobre otros usuarios sin su consentimiento.</li>
                <li>Introducir virus, código malicioso o cualquier tecnología perjudicial en el sitio.</li>
                <li>Reproducir, duplicar, vender o explotar cualquier parte del sitio con fines comerciales sin autorización expresa.</li>
                <li>Utilizar herramientas automatizadas (bots, scrapers) para extraer contenido del sitio.</li>
              </ul>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 3 */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                3. Propiedad Intelectual
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Todo el contenido del sitio web, incluyendo pero no limitado a textos, imágenes, gráficos, logotipos, diseños, fotografías, vídeos, software y código fuente, es propiedad de {companyInfo.name} o de sus licenciantes y está protegido por las leyes de propiedad intelectual e industrial aplicables en Colombia. Su uso no le otorga ningún derecho sobre dicho contenido, salvo lo expresamente autorizado en estos términos.
              </p>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 4 */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                4. Información y Contenido
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nos esforzamos por mantener la información publicada en nuestro sitio web actualizada y precisa. Sin embargo:
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-8">
                <li>La información sobre proyectos, servicios y cotizaciones tiene carácter informativo y no constituye una oferta vinculante.</li>
                <li>Las imágenes y descripciones de proyectos son representativas y pueden no reflejar el estado actual de las obras.</li>
                <li>Nos reservamos el derecho de modificar, actualizar o eliminar contenido en cualquier momento sin previo aviso.</li>
                <li>No garantizamos que la información esté libre de errores o inexactitudes.</li>
              </ul>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 5 */}
            <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                5. Formularios de Contacto y Cotización
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Al enviar información a través de nuestros formularios de contacto o solicitud de cotización, usted:
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-8">
                <li>Acepta que la información proporcionada sea utilizada conforme a nuestra Política de Privacidad.</li>
                <li>Declara que la información suministrada es veraz y actual.</li>
                <li>Comprende que las cotizaciones emitidas tienen una vigencia limitada y están sujetas a cambios.</li>
                <li>Autoriza a {companyInfo.name} a contactarle por los medios proporcionados para dar seguimiento a su solicitud.</li>
              </ul>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 6 */}
            <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                6. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {companyInfo.name} no será responsable por daños directos, indirectos, incidentales, consecuentes o punitivos derivados del uso o la imposibilidad de uso de nuestro sitio web. Esto incluye, sin limitación, daños por pérdida de datos, ganancias o beneficios, interrupciones de negocio o fallos técnicos. El uso del sitio web es bajo su propio riesgo.
              </p>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 7 */}
            <motion.div custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                7. Enlaces a Terceros
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su comodidad. No tenemos control sobre el contenido ni las prácticas de privacidad de dichos sitios y no nos hacemos responsables por ellos. Le recomendamos revisar las políticas de privacidad y términos de uso de cualquier sitio de terceros que visite.
              </p>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 8 */}
            <motion.div custom={7} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                8. Modificaciones
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nos reservamos el derecho de modificar estos Términos de Uso en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado del sitio web después de cualquier cambio constituye su aceptación de los nuevos términos.
              </p>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 9 */}
            <motion.div custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                9. Legislación Aplicable
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Estos Términos de Uso se rigen por las leyes de la República de Colombia. Cualquier controversia derivada del uso de este sitio web será sometida a la jurisdicción de los tribunales competentes de la ciudad de Manizales, Caldas, Colombia.
              </p>
            </motion.div>

            <Separator className="my-8" />

            {/* Contact */}
            <motion.div custom={9} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#0a1628] mb-4">
                10. Contacto
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Si tiene preguntas o comentarios sobre estos Términos de Uso, puede contactarnos a través de:
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
