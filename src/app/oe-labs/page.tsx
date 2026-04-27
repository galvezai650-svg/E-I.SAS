'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { Badge } from '@/components/ui/badge'
import {
  Code2,
  Server,
  Globe,
  Cpu,
  Database,
  Smartphone,
  GitBranch,
  Layers,
  Terminal,
  Palette,
  Zap,
  ArrowRight,
  ChevronRight,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

const oscarSkills = [
  { icon: Code2, label: 'TypeScript / JavaScript' },
  { icon: Server, label: 'Next.js / React' },
  { icon: Database, label: 'Prisma / SQL' },
  { icon: Globe, label: 'Node.js / APIs REST' },
  { icon: Layers, label: 'Tailwind CSS / UI' },
  { icon: GitBranch, label: 'Git / GitHub' },
  { icon: Cpu, label: 'Inteligencia Artificial' },
  { icon: Smartphone, label: 'Aplicaciones Web' },
]

const eduardoSkills = [
  { icon: Code2, label: 'TypeScript / JavaScript' },
  { icon: Server, label: 'Next.js / React' },
  { icon: Database, label: 'Bases de Datos' },
  { icon: Globe, label: 'Desarrollo Backend' },
  { icon: Palette, label: 'Diseño de Interfaces' },
  { icon: GitBranch, label: 'Git / Control de Versiones' },
  { icon: Terminal, label: 'DevOps / Deploy' },
  { icon: Zap, label: 'Optimización Web' },
]

const projects = [
  {
    name: 'Edificando Ingenieros S.A.S.',
    description: 'Sitio web corporativo con portafolio de proyectos, galerías multimedia, cotizaciones y gestión de contenido dinámico.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Framer Motion'],
  },
  {
    name: 'Plataformas Web a Medida',
    description: 'Desarrollo de aplicaciones web personalizadas para clientes del sector construcción, comercio y servicios.',
    tech: ['React', 'Node.js', 'APIs REST', 'Bases de Datos', 'Deploy Cloud'],
  },
]

export default function OELabsPage() {
  return (
    <MainLayout>
      {/* Breadcrumb */}
      <section className="bg-[#0a1628] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
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
            <span className="text-brand-light font-medium">ØE LABS</span>
          </motion.nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-[#0a1628] pb-20 pt-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand rounded-full blur-[200px]" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <span className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-brand via-cyan-400 to-brand-light bg-clip-text text-transparent">
                ØE LABS
              </span>
            </motion.div>
            <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-4">
              Estudio de desarrollo web y software. Construimos experiencias digitales con tecnología de vanguardia.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <Badge className="bg-brand/20 text-brand-light border-brand/30 px-4 py-1.5 text-xs font-semibold">
                Fullstack Development
              </Badge>
              <Badge className="bg-cyan-500/15 text-cyan-300 border-cyan-500/30 px-4 py-1.5 text-xs font-semibold">
                Web & AI
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628] mb-3">
              Nuestro Equipo
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Jóvenes talentos apasionados por la tecnología y el desarrollo de software
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Oscar */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 overflow-hidden">
                {/* Header */}
                <div className="relative bg-gradient-to-br from-[#0a1628] to-[#0f2847] p-8 text-center">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 bg-brand rounded-full blur-[60px]" />
                  </div>
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-brand/20 border-2 border-brand/40 flex items-center justify-center mb-4">
                      <span className="text-3xl font-black text-brand-light">OM</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Oscar David Marulanda Gálvez</h3>
                    <p className="text-brand-light/80 text-sm font-medium mb-3">Desarrollador Fullstack</p>
                    <div className="flex items-center justify-center gap-2">
                      <Badge className="bg-brand/20 text-brand-light border-brand/30 text-xs">
                        3 años de experiencia
                      </Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs">
                        Developer
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    Desarrollador fullstack con sólida experiencia en la construcción de aplicaciones web modernas. Especializado en el ecosistema JavaScript/TypeScript, con dominio en frameworks frontend y backend, integración de inteligencia artificial y diseño de arquitecturas escalables. Apasionado por crear soluciones tecnológicas que impacten positivamente en los negocios.
                  </p>

                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Stack Tecnológico</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {oscarSkills.map((skill) => (
                      <div key={skill.label} className="flex items-center gap-2 text-sm text-gray-600 py-1">
                        <skill.icon className="w-4 h-4 text-brand flex-shrink-0" />
                        <span>{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Eduardo */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 overflow-hidden">
                {/* Header */}
                <div className="relative bg-gradient-to-br from-[#0a1628] to-[#0f2847] p-8 text-center">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 bg-cyan-500 rounded-full blur-[60px]" />
                  </div>
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-cyan-500/20 border-2 border-cyan-500/40 flex items-center justify-center mb-4">
                      <span className="text-3xl font-black text-cyan-300">EG</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Eduardo García</h3>
                    <p className="text-cyan-300/80 text-sm font-medium mb-3">Desarrollador Fullstack</p>
                    <div className="flex items-center justify-center gap-2">
                      <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs">
                        Fullstack Developer
                      </Badge>
                      <Badge className="bg-brand/20 text-brand-light border-brand/30 text-xs">
                        Web Engineer
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    Desarrollador fullstack enfocado en la creación de experiencias web robustas y de alto rendimiento. Con experiencia en diseño de interfaces, arquitectura backend y despliegue de aplicaciones en la nube. Comprometido con las buenas prácticas de desarrollo, la optimización del rendimiento y la entrega de productos digitales que superen las expectativas del cliente.
                  </p>

                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Stack Tecnológico</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {eduardoSkills.map((skill) => (
                      <div key={skill.label} className="flex items-center gap-2 text-sm text-gray-600 py-1">
                        <skill.icon className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        <span>{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-20 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628] mb-3">
              Proyectos Destacados
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Soluciones digitales que impulsan negocios reales
            </p>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-lg font-bold text-[#0a1628]">{project.name}</h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs bg-gray-100 text-gray-600 border-0">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-16 md:py-20 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand rounded-full blur-[200px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-4">
              Tecnologías que Usamos
            </h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto">
              Trabajamos con las herramientas más modernas del ecosistema web
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Framer Motion', 'OpenAI API', 'Vercel', 'Git', 'Figma'].map((tech, i) => (
                <motion.span
                  key={tech}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-brand/20 hover:text-brand-light hover:border-brand/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#0a1628] mb-4">
              ¿Necesita una solución digital?
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              Construimos aplicaciones web a la medida de su negocio. Escríbenos al WhatsApp y hagamos realidad su próximo proyecto.
            </p>
            <a
              href="https://wa.me/573026812303?text=Hola%20ØE%20LABS%2C%20me%20interesa%20una%20solución%20digital%20para%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escribir al WhatsApp
            </a>
            <p className="text-gray-400 text-xs mt-4">+57 302 681 2303</p>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
