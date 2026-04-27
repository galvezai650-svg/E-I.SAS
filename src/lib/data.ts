export interface Project {
  id: string
  title: string
  category: string
  categorySlug: string
  location: string
  description: string
  fullDescription: string
  image: string
  gallery: string[]
  videos?: string[]
  client: string
  year: string
  type: string
  services: string[]
  highlights: string[]
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  fullDescription: string
  image: string
  features: string[]
  benefits: string[]
  projects: number
  category: 'construccion' | 'disenos' | 'adicionales'
  featured?: boolean
  comingSoon?: boolean
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  authorRole: string
  published: boolean
  featured: boolean
  createdAt: string
  readTime: string
}

// ═══════════════════════════════════════════════════════════
// COMPANY INFO
// ═══════════════════════════════════════════════════════════
export const companyInfo = {
  slogan: 'Fundamentando confianza, edificando calidad',
  name: 'EDIFICANDO Ingenieros S.A.S.',
  shortName: 'Edificando Ingenieros',
  description: 'Somos una empresa colombiana dedicada a la construcción y diseño de obras civiles con amplia experiencia en organizaciones del sector público y privado. Contamos con fuerte presencia en el Eje Cafetero.',
  message: 'Tu proyecto es importante para nosotros, te ayudaremos para que cumplas tu sueño',
  phone: '310 887 0044',
  email: 'contacto@edificandoingenierossas.com',
  address: 'Cra 9 #14-20',
  city: 'Chinchiná, Caldas',
  region: 'Eje Cafetero Colombiano',
  founded: 2016,
}

// ═══════════════════════════════════════════════════════════
// PROJECT CATEGORIES
// ═══════════════════════════════════════════════════════════
export const projectCategories = [
  { id: 'todos', label: 'Todos', emoji: '' },
  { id: 'pavimentos', label: 'Pavimentos y Vías', emoji: '🛣️' },
  { id: 'estructuras', label: 'Estructuras', emoji: '🏗️' },
  { id: 'acueductos', label: 'Acueductos y Alcantarillados', emoji: '💧' },
  { id: 'estabilidad', label: 'Estabilidad de Taludes', emoji: '⛰️' },
  { id: 'otras-obras', label: 'Otras Obras', emoji: '🏊' },
]

// ═══════════════════════════════════════════════════════════
// PROYECTOS
// ═══════════════════════════════════════════════════════════
export const projects: Project[] = [
  // ─── PROYECTOS CON GALERÍA REAL (5 proyectos) ───────────────
  {
    id: 'pavimento-avenida-kevin-angel',
    title: 'Pavimentos - Avenida Kevin Ángel',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Manizales, Caldas',
    description: 'Pavimentación de la Avenida Kevin Ángel para mejorar la infraestructura vial del municipio de Manizales.',
    fullDescription: 'Proyecto de pavimentación de la Avenida Kevin Ángel en Manizales, que ejecutamos para la Alcaldía de Manizales. Los trabajos incluyeron la construcción de pavimento para mejorar la transitabilidad y seguridad vial de esta importante avenida de la ciudad, beneficiando a miles de habitantes y vehiculos que transitan diariamente por esta vía.',
    image: '/images/kevin-angel-7.png',
    gallery: [
      'https://image2url.com/r2/default/images/1775539586403-cb2f4b09-1f01-4bac-92aa-d2d012822f29.png',
      'https://image2url.com/r2/default/images/1775539646178-f2e5b8a1-bdf3-4415-8d1d-67a7b4c31664.png',
      'https://image2url.com/r2/default/images/1775539712510-b50e21b1-4dc3-4c3c-b51c-038841f59066.png',
      'https://image2url.com/r2/default/images/1775539777739-7ab9f0f6-d98a-454b-831a-ef37b8590cdc.png',
      'https://image2url.com/r2/default/images/1775540237333-b078c172-9e35-448b-b099-27a728586e5e.png',
      'https://image2url.com/r2/default/images/1775540281075-3e577199-319f-4e85-b706-53bac2f9a6ab.png',
      '/images/kevin-angel-7.png',
    ],
    client: 'Alcaldía de Manizales',
    year: '2022',
    type: 'Obra Pública',
    services: ['Pavimentación', 'Infraestructura vial'],
    highlights: ['Sector público', 'Alcaldía', 'Manizales', 'Pavimentos'],
  },
  {
    id: 'bodega-aguacate-aranzazu',
    title: 'Bodega Almacenamiento de Aguacate - Aranzazu',
    category: 'Estructuras',
    categorySlug: 'estructuras',
    location: 'Aranzazu, Caldas',
    description: 'Construcción de bodega destinada al almacenamiento de aguacate e insumos para su producción en el municipio de Aranzazu, sector UP San José.',
    fullDescription: 'Proyecto de construcción de una bodega destinada al almacenamiento de aguacate e insumos para su producción en el municipio de Aranzazu, sector UP San José. Diseñamos esta obra para fortalecer la cadena productiva agrícola, proporcionando un espacio adecuado para el manejo, conservación y logística del producto, contribuyendo al desarrollo económico local.',
    image: 'https://image2url.com/r2/default/images/1775656666369-e0beae28-3447-4367-878f-558b796423af.png',
    gallery: [
      'https://image2url.com/r2/default/images/1775656266663-b8bb94f8-790c-49c7-b82e-08ae0c44c78a.png',
      'https://image2url.com/r2/default/images/1775656324764-1644dd75-6a8b-4fd4-a9c7-9b680ade2f0e.png',
      'https://image2url.com/r2/default/images/1775656359656-04cb9efe-2de8-4f0d-8d62-2b2cc20ca677.png',
      'https://image2url.com/r2/default/images/1775656409342-6dab1eec-67c7-4b62-8db8-f13cbe8efcd2.png',
      'https://image2url.com/r2/default/images/1775656452490-9c11da50-2ddf-4463-b573-4b0ef13911ae.png',
      'https://image2url.com/r2/default/images/1775656598848-4297e678-26e6-46eb-beda-0ef1fb60219a.png',
    ],
    client: 'UP San José',
    year: '2021',
    type: 'Obra de Infraestructura',
    services: ['Construcción de infraestructura', 'Obras civiles', 'Estructura metálica', 'Instalaciones hidrosanitarias', 'Acabados arquitectónicos'],
    highlights: ['Sector productivo agrícola', 'Infraestructura de almacenamiento', 'Optimización logística', 'Apoyo al sector agroindustrial', 'Municipio de Aranzazu'],
  },
  {
    id: 'pavimento-cll-10-5-6-villamaria',
    title: 'Pavimento Cll 10 entre 5 y 6 - Villamaría',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Villamaría, Caldas',
    description: 'Proyecto de reposición de pavimento y redes hidrosanitarias en la calle 10 entre carreras 5 y 6 del municipio de Villamaría.',
    fullDescription: 'Proyecto de reposición de pavimento y redes hidrosanitarias en la calle 10 entre carreras 5 y 6 del municipio de Villamaría, que ejecutamos para mejorar la infraestructura vial y los sistemas de acueducto y alcantarillado. La obra permitió optimizar la transitabilidad, seguridad vial y el correcto manejo de aguas, beneficiando a la comunidad local y mejorando la calidad de vida de los habitantes del sector.',
    image: 'https://image2url.com/r2/default/images/1775611438020-6a5a7956-9e38-4e7c-a20c-dfceada9f6aa.png',
    gallery: [
      'https://image2url.com/r2/default/images/1775611220048-f3cc71fa-26e5-4306-be2c-442563db1900.png',
      'https://image2url.com/r2/default/images/1775611276160-afc0fd61-8a29-486f-b3a-375f5c2a6664.png',
      'https://image2url.com/r2/default/images/1775611343473-a8e955ce-8770-4fc4-aa3b-9d4dc5250272.png',
      'https://image2url.com/r2/default/images/1775611390027-105cb5ab-17a5-49df-ab82-1c260455ee03.png',
      'https://image2url.com/r2/default/images/1775611438020-6a5a7956-9e38-4e7c-a20c-dfceada9f6aa.png',
    ],
    client: 'Alcaldía de Villamaría',
    year: '2021 - 2022',
    type: 'Obra Pública',
    services: ['Pavimentación', 'Infraestructura vial', 'Construcción de alcantarillado', 'Redes de acueducto', 'Obras civiles'],
    highlights: ['Sector público', 'Infraestructura urbana', 'Mejoramiento vial', 'Redes hidrosanitarias', 'Municipio de Villamaría'],
  },
  {
    id: 'piscina-social-condominio-el-libano',
    title: 'Construcción de Piscina Social - Condominio El Líbano',
    category: 'Otras Obras',
    categorySlug: 'otras-obras',
    location: 'Palestina, Caldas',
    description: 'Proyecto de construcción de piscina social en el Condominio El Líbano, ubicado en Palestina, Caldas, ejecutado entre diciembre de 2022 y enero de 2023. Incluyó excavación mecánica, construcción de estructura en concreto de 4000 PSI, instalación de acero de refuerzo, sistema hidráulico de bombeo, construcción de casa de máquinas, andenes perimetrales y acabados con enchapes.',
    fullDescription: 'Proyecto de construcción de piscina social en el Condominio El Líbano, ubicado en Palestina, Caldas, ejecutado entre diciembre de 2022 y enero de 2023. La obra incluyó excavación mecánica del terreno, construcción de la estructura de la piscina en concreto de 4000 PSI con sus respectivos muros y fondo, instalación de acero de refuerzo para garantizar la durabilidad estructural, instalación de la red hidráulica de bombeo para la recirculación y tratamiento del agua, construcción de la casa de máquinas que alberga el equipo de bombeo y filtración, construcción de andenes perimetrales para el acceso y circulación de los usuarios, e instalación de enchapes como acabado final para proporcionar una superficie estética y funcional.',
    image: 'https://image2url.com/r2/default/images/1776958234801-1ca69661-325a-4adc-8d9e-f1c39c44516c.png',
    gallery: [
      'https://image2url.com/r2/default/images/1776957858296-a2a62921-2e1e-4886-8dc1-0932a02d8946.png',
      'https://image2url.com/r2/default/images/1776957926511-c5a93da1-4b5a-4a82-ada2-a4b105dd4649.png',
      'https://image2url.com/r2/default/images/1776957988993-c803249e-94f5-4ba4-999f-51c815094e7d.png',
      'https://image2url.com/r2/default/images/1776958170066-7257bd0e-4416-45c7-b0b8-1125759f4058.png',
      'https://image2url.com/r2/default/images/1776958234801-1ca69661-325a-4adc-8d9e-f1c39c44516c.png',
    ],
    client: 'Condominio El Líbano',
    year: '2022 - 2023',
    type: 'Infraestructura – Recreación',
    services: ['Excavación mecánica', 'Estructura en concreto 4000 PSI', 'Acero de refuerzo', 'Sistema hidráulico de bombeo', 'Casa de máquinas', 'Andenes perimetrales', 'Enchapes'],
    highlights: ['Condominio El Líbano', 'Palestina', 'Caldas', 'Piscina social', 'Recreación'],
  },
  {
    id: 'pavimentando-via-libano-guaimaral',
    title: '26-04-10 Líbano y Guaimaral - Pavimentando Vía',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Líbano, Tolima',
    description: 'Proyecto de pavimentación vial en el sector de Líbano y Guaimaral, mejorando la infraestructura y transitabilidad de la vía.',
    fullDescription: 'Ejecutamos el proyecto de pavimentación vial 26-04-10 en el sector de Líbano y Guaimaral. Los trabajos incluyeron la construcción de pavimento para mejorar la transitabilidad y conectividad de esta vía, beneficiando a la comunidad con una infraestructura vial segura y durable.',
    image: 'https://www.image2url.com/r2/default/images/1777105500492-3dcddb07-85bf-4566-97ca-2a26e93788cb.png',
    gallery: [
      'https://www.image2url.com/r2/default/images/1777105500492-3dcddb07-85bf-4566-97ca-2a26e93788cb.png',
    ],
    videos: [
      'https://drive.google.com/file/d/1lVOZ63B_KfhhcbFzHh4_sTmuVhPZErfS/preview',
      'https://drive.google.com/file/d/1Uhk5chsGfM_kcREFW5pGYvYARE0lsXVG/preview',
    ],
    client: 'Municipio del Líbano',
    year: '2026',
    type: 'Obra Pública',
    services: ['Pavimentación', 'Infraestructura vial'],
    highlights: ['Sector público', 'Líbano', 'Guaimaral', 'Tolima', 'Pavimentos'],
  },
  {
    id: 'muro-carola-2023',
    title: '9-2023 Muro La Carola',
    category: 'Estabilidad de Taludes',
    categorySlug: 'estabilidad',
    location: 'Barrio La Carola, Manizales, Caldas',
    description: 'Estabilización de taludes mediante la construcción de pantalla con anclajes pasivos en el barrio La Carola.',
    fullDescription: 'Proyecto de estabilización de taludes mediante la construcción de pantalla con anclajes pasivos en el barrio La Carola, Manizales. Las actividades ejecutadas incluyeron: conformación de talud, perforaciones para anclajes y drenes, instalación de geotextil no tejido 1600, construcción de viga de cimentación para muro, inyección con mortero 1:2 para anclajes, instalación de acero de refuerzo para anclajes, pantalla y viga de cimentación, y construcción de pantalla con concreto 21Mpa o 3000PSI.',
    image: 'https://www.image2url.com/r2/default/images/1777106592335-0898dd0e-ca34-492f-af91-5f5d874dcf0e.png',
    gallery: [
      'https://www.image2url.com/r2/default/images/1777106592335-0898dd0e-ca34-492f-af91-5f5d874dcf0e.png',
      'https://www.image2url.com/r2/default/images/1777106644750-c45c671b-4c1d-41f8-8728-85c700602e96.png',
      'https://www.image2url.com/r2/default/images/1777106724386-e1ada93b-ec8b-427b-9257-06b5a4003da8.png',
      'https://www.image2url.com/r2/default/images/1777106798934-d078bf45-8b0e-47be-ae13-fcfed649c5ef.png',
    ],
    client: 'Barrio La Carola',
    year: 'Julio 2023',
    type: 'Estabilidad de Taludes',
    services: ['Conformación de talud', 'Perforaciones para anclajes y drenes', 'Geotextil no tejido 1600', 'Viga de cimentación', 'Inyección con mortero 1:2', 'Acero de refuerzo', 'Pantalla en concreto 21Mpa'],
    highlights: ['Anclajes pasivos', 'Pantalla de concreto', 'Estabilización', 'Manizales', 'La Carola'],
  },

  // ─── PAVIMENTOS Y VÍAS ────────────────────────────────────
  {
    id: 'pavimentos-alcaldia-manizales-2021',
    title: 'Pavimentos - Alcaldía de Manizales 2021',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Manizales, Caldas',
    description: 'Proyecto de pavimentación ejecutado para la Alcaldía de Manizales en el año 2021.',
    fullDescription: 'Proyecto de pavimentación ejecutado para la Alcaldía de Manizales en el año 2021, orientado a mejorar la infraestructura vial del municipio.',
    image: '/images/kevin-angel-7.png',
    gallery: [],
    client: 'Alcaldía de Manizales',
    year: '2021',
    type: 'Obra Pública',
    services: ['Pavimentación', 'Infraestructura vial'],
    highlights: ['Sector público', 'Alcaldía de Manizales', 'Pavimentos', '2021'],
  },
  {
    id: 'pavimentos-alcaldia-pereira-2021',
    title: 'Pavimentos - Alcaldía de Pereira 2021',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Pereira, Risaralda',
    description: 'Proyecto de pavimentación ejecutado para la Alcaldía de Pereira en el año 2021.',
    fullDescription: 'Proyecto de pavimentación ejecutado para la Alcaldía de Pereira en el año 2021, orientado a mejorar la infraestructura vial del municipio.',
    image: '/images/kevin-angel-7.png',
    gallery: [],
    client: 'Alcaldía de Pereira',
    year: '2021',
    type: 'Obra Pública',
    services: ['Pavimentación', 'Infraestructura vial'],
    highlights: ['Sector público', 'Alcaldía de Pereira', 'Risaralda', 'Pavimentos'],
  },
  {
    id: 'placas-huella-san-julian-pomos-villamaria',
    title: 'Placas Huella San Julián y Pomos - Villamaría',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Villamaría, Caldas',
    description: 'Construcción de placas huella en los sectores de San Julián y Pomos del municipio de Villamaría.',
    fullDescription: 'Proyecto de construcción de placas huella en los sectores de San Julián y Pomos del municipio de Villamaría, ejecutado para la Alcaldía de Villamaría en el año 2023. Las obras permitieron mejorar la transitabilidad vehicular y peatonal en zonas rurales del municipio.',
    image: '/images/kevin-angel-7.png',
    gallery: [],
    client: 'Alcaldía de Villamaría',
    year: '2023',
    type: 'Obra Pública',
    services: ['Placas huella', 'Infraestructura vial'],
    highlights: ['Sector público', 'Villamaría', 'Placas huella', 'San Julián', 'Pomos'],
  },
  {
    id: 'pavimento-alcantarillado-acueducto-aquamana',
    title: 'Pavimento, Alcantarillado y Acueducto - Aquamaná E.S.P.',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Manizales, Caldas',
    description: 'Proyecto integral de pavimentación, alcantarillado y acueducto ejecutado para Aquamaná E.S.P.',
    fullDescription: 'Proyecto integral de pavimentación, alcantarillado y acueducto ejecutado para Aquamaná E.S.P. en el año 2022. Las obras incluyeron la construcción de pavimento vial junto con la instalación de redes de alcantarillado y acueducto, optimizando la infraestructura sanitaria y vial del sector.',
    image: '/images/kevin-angel-7.png',
    gallery: [],
    client: 'Aquamaná E.S.P.',
    year: '2022',
    type: 'Obra Pública',
    services: ['Pavimentación', 'Alcantarillado', 'Acueducto', 'Infraestructura vial'],
    highlights: ['Aquamaná E.S.P.', 'Infraestructura integral', 'Manizales', '2022'],
  },

  // ─── ESTRUCTURAS ──────────────────────────────────────────
  {
    id: 'porteria-condominio-taboga',
    title: 'Portería Condominio Taboga',
    category: 'Estructuras',
    categorySlug: 'estructuras',
    location: 'Manizales, Caldas',
    description: 'Construcción de portería para el Condominio Taboga.',
    fullDescription: 'Proyecto de construcción de portería para el Condominio Taboga, ejecutado como obra privada en el año 2022. La obra comprendió el diseño y construcción de la estructura de acceso al condominio, incluyendo acabados arquitectónicos de alta calidad.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Condominio Taboga',
    year: '2022',
    type: 'Obra Privada',
    services: ['Construcción de estructura', 'Acabados arquitectónicos'],
    highlights: ['Obra privada', 'Condominio Taboga', 'Portería', 'Manizales'],
  },
  {
    id: 'colegio-vereda-el-trebol-chinchina',
    title: 'Colegio Vereda El Trébol - Chinchiná',
    category: 'Estructuras',
    categorySlug: 'estructuras',
    location: 'Chinchiná, Caldas',
    description: 'Construcción de colegio en la vereda El Trébol del municipio de Chinchiná.',
    fullDescription: 'Proyecto de construcción de colegio en la vereda El Trébol del municipio de Chinchiná, ejecutado para la Alcaldía de Chinchiná en el año 2023. La obra contempló la edificación de espacios educativos funcionales y seguros para la comunidad rural del sector.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Chinchiná',
    year: '2023',
    type: 'Obra Pública',
    services: ['Construcción de edificación educativa', 'Obras civiles'],
    highlights: ['Sector público', 'Chinchiná', 'Educación', 'Vereda El Trébol'],
  },
  {
    id: 'bodega-vision-norte-cartama',
    title: 'Bodega de Almacenamiento - Visión Norte, Cartama',
    category: 'Estructuras',
    categorySlug: 'estructuras',
    location: 'Cartama, Caldas',
    description: 'Construcción de bodega de almacenamiento para Visión Norte en Cartama.',
    fullDescription: 'Proyecto de construcción de bodega de almacenamiento para Visión Norte en el municipio de Cartama, ejecutado como obra privada en el año 2022. La obra fue diseñada para satisfacer las necesidades de almacenamiento y logística del cliente.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Visión Norte',
    year: '2022',
    type: 'Obra Privada',
    services: ['Construcción de bodega', 'Estructura metálica', 'Acabados'],
    highlights: ['Obra privada', 'Visión Norte', 'Cartama', 'Bodega'],
  },

  // ─── ACUEDUCTOS Y ALCANTARILLADOS ─────────────────────────
  {
    id: 'colector-san-carlos-aquamana',
    title: 'Colector San Carlos - Aquamaná E.S.P.',
    category: 'Acueductos y Alcantarillados',
    categorySlug: 'acueductos',
    location: 'Manizales, Caldas',
    description: 'Construcción de colector sanitario San Carlos para Aquamaná E.S.P.',
    fullDescription: 'Proyecto de construcción del colector sanitario San Carlos para Aquamaná E.S.P. en el año 2021. La obra permitió mejorar el sistema de recolección y transporte de aguas residuales del sector, contribuyendo al saneamiento básico de la ciudad.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Aquamaná E.S.P.',
    year: '2021',
    type: 'Obra Pública',
    services: ['Construcción de colector', 'Alcantarillado sanitario'],
    highlights: ['Aquamaná E.S.P.', 'Colector San Carlos', 'Saneamiento básico', 'Manizales'],
  },
  {
    id: 'alcantarillado-cll-10-entre-6-7',
    title: 'Alcantarillado Calle 10 Entre 6 y 7 - Aquamaná E.S.P.',
    category: 'Acueductos y Alcantarillados',
    categorySlug: 'acueductos',
    location: 'Manizales, Caldas',
    description: 'Construcción de alcantarillado en la calle 10 entre carreras 6 y 7 para Aquamaná E.S.P.',
    fullDescription: 'Proyecto de construcción de alcantarillado en la calle 10 entre carreras 6 y 7, ejecutado para Aquamaná E.S.P. en el año 2022. La obra contempló la instalación de redes de alcantarillado sanitario y pluvial, mejorando el sistema de drenaje del sector.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Aquamaná E.S.P.',
    year: '2022',
    type: 'Obra Pública',
    services: ['Alcantarillado sanitario', 'Alcantarillado pluvial', 'Obras civiles'],
    highlights: ['Aquamaná E.S.P.', 'Alcantarillado', 'Calle 10', 'Manizales'],
  },
  {
    id: 'acueducto-cll-10-entre-6-7',
    title: 'Acueducto Calle 10 Entre 6 y 7 - Aquamaná E.S.P.',
    category: 'Acueductos y Alcantarillados',
    categorySlug: 'acueductos',
    location: 'Manizales, Caldas',
    description: 'Construcción de acueducto en la calle 10 entre carreras 6 y 7 para Aquamaná E.S.P.',
    fullDescription: 'Proyecto de construcción de acueducto en la calle 10 entre carreras 6 y 7, ejecutado para Aquamaná E.S.P. en el año 2022. La obra contempló la instalación de redes de acueducto, garantizando el suministro de agua potable al sector.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Aquamaná E.S.P.',
    year: '2022',
    type: 'Obra Pública',
    services: ['Acueducto', 'Redes de agua potable', 'Obras civiles'],
    highlights: ['Aquamaná E.S.P.', 'Acueducto', 'Calle 10', 'Manizales'],
  },

  // ─── ESTABILIDAD DE TALUDES ───────────────────────────────
  {
    id: 'muro-morrogacho-2018',
    title: 'Muro Morrogacho - Alcaldía de Manizales 2018',
    category: 'Estabilidad de Taludes',
    categorySlug: 'estabilidad',
    location: 'Manizales, Caldas',
    description: 'Construcción de muro de contención en el sector Morrogacho para la Alcaldía de Manizales.',
    fullDescription: 'Proyecto de construcción de muro de contención en el sector Morrogacho, ejecutado para la Alcaldía de Manizales en el año 2018. La obra fue diseñada para estabilizar el terreno y proteger la infraestructura vial y residencial del sector.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Manizales',
    year: '2018',
    type: 'Estabilidad de Taludes',
    services: ['Muro de contención', 'Estabilización de taludes'],
    highlights: ['Sector público', 'Manizales', 'Morrogacho', 'Contención'],
  },
  {
    id: 'estabilizacion-taludes-alcaldia-manizales-2018',
    title: 'Estabilización de Taludes - Alcaldía de Manizales 2018',
    category: 'Estabilidad de Taludes',
    categorySlug: 'estabilidad',
    location: 'Manizales, Caldas',
    description: 'Obras de estabilización de taludes ejecutadas para la Alcaldía de Manizales.',
    fullDescription: 'Proyecto de estabilización de taludes ejecutado para la Alcaldía de Manizales en el año 2018. Las obras incluyeron intervenciones geotécnicas para mitigar riesgos de deslizamiento y proteger la infraestructura del municipio.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Manizales',
    year: '2018',
    type: 'Estabilidad de Taludes',
    services: ['Estabilización de taludes', 'Obras geotécnicas'],
    highlights: ['Sector público', 'Manizales', 'Estabilización', 'Geotecnia'],
  },

  // ─── OTRAS OBRAS ──────────────────────────────────────────
  {
    id: 'cancha-vereda-naranjal-chinchina',
    title: 'Cancha Vereda Naranjal - Chinchiná',
    category: 'Otras Obras',
    categorySlug: 'otras-obras',
    location: 'Chinchiná, Caldas',
    description: 'Construcción de cancha en la vereda Naranjal del municipio de Chinchiná.',
    fullDescription: 'Proyecto de construcción de cancha en la vereda Naranjal del municipio de Chinchiná, ejecutado para la Alcaldía de Chinchiná en el año 2023. La obra benefició a la comunidad rural con un espacio deportivo para la recreación y el deporte.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Chinchiná',
    year: '2023',
    type: 'Obra Pública',
    services: ['Construcción de cancha', 'Obras civiles'],
    highlights: ['Sector público', 'Chinchiná', 'Cancha', 'Vereda Naranjal'],
  },
  {
    id: 'gimnasios-biosaludables-chinchina',
    title: 'Gimnasios Biosaludables - Chinchiná',
    category: 'Otras Obras',
    categorySlug: 'otras-obras',
    location: 'Chinchiná, Caldas',
    description: 'Instalación de gimnasios biosaludables en el municipio de Chinchiná.',
    fullDescription: 'Proyecto de instalación de gimnasios biosaludables en el municipio de Chinchiná, ejecutado para la Alcaldía de Chinchiná en el año 2023. Los gimnasios biosaludables proporcionan espacios al aire libre para la actividad física y el bienestar de la comunidad.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Chinchiná',
    year: '2023',
    type: 'Obra Pública',
    services: ['Gimnasios biosaludables', 'Equipamiento urbano'],
    highlights: ['Sector público', 'Chinchiná', 'Biosaludable', 'Recreación'],
  },
]

// ═══════════════════════════════════════════════════════════
// PORTFOLIO SUMMARY
// ═══════════════════════════════════════════════════════════
export const portfolioSummary = {
  totalProjects: 20,
  period: '2016 - 2026',
  departments: [
    { name: 'Caldas', municipalities: ['Manizales', 'Villamaría', 'Chinchiná', 'Palestina', 'Aranzazu'] },
    { name: 'Tolima', municipalities: ['Líbano'] },
  ],
  sectors: {
    publico: { label: 'Sector Público', description: 'Entidades municipales (Alcaldías), empresas de servicios públicos (E.S.P.)' },
    privado: { label: 'Sector Privado', description: 'Condominios, propietarios privados, entidades corporativas' },
  },
  categories: [
    { label: 'Infraestructura Vial', items: ['Pavimentos rígidos y flexibles', 'Placas huella', 'Mantenimiento vial'] },
    { label: 'Construcción Estructural', items: ['Edificaciones educativas (colegios)', 'Bodegas industriales', 'Porterías y accesos', 'Estructuras metálicas y de concreto'] },
    { label: 'Saneamiento Básico', items: ['Redes de acueducto', 'Sistemas de alcantarillado', 'Colectores sanitarios'] },
    { label: 'Geotecnia', items: ['Muros de contención', 'Estabilización de taludes', 'Obras de protección'] },
    { label: 'Obras Comunitarias', items: ['Piscinas sociales', 'Canchas deportivas', 'Gimnasios al aire libre'] },
  ],
}

// ═══════════════════════════════════════════════════════════
// PUBLIC SECTOR INFO
// ═══════════════════════════════════════════════════════════
export const publicSector = {
  volume: 'Ciento diez proyectos ejecutados',
  volumeFormatted: '110 proyectos',
  clients: {
    alcaldias: [
      'Manizales', 'Chinchiná', 'Villamaría', 'Pereira', 'Palestina',
      'Cali', 'Yopal', 'Pácora', 'Aguadas', 'Neira', 'Aranzazu', 'Armenia'
    ],
    empresas: [
      'Gensa', 'Aquamaná', 'INVIAS', 'Corpocaldas', 'Aguas de Manizales', 'Empocaldas'
    ],
    gobernaciones: ['Caldas', 'Risaralda'],
  },
}

// ═══════════════════════════════════════════════════════════
// SERVICES (Categorized)
// ═══════════════════════════════════════════════════════════
export const serviceCategories = [
  { id: 'construccion', label: 'Construcción', icon: 'Building2' },
  { id: 'disenos', label: 'Diseños y Estudios', icon: 'PenTool' },
  { id: 'adicionales', label: 'Servicios Adicionales', icon: 'Star' },
]

export const services: Service[] = [
  // ─── A. SERVICIOS DE CONSTRUCCIÓN ───
  {
    id: 'construccion-edificaciones',
    icon: 'Building2',
    title: 'Construcción de Edificaciones',
    description: 'Construimos viviendas, bodegas, piscinas y espacios de recreación con altos estándares de calidad, diseñados conforme a los requerimientos del cliente.',
    fullDescription: 'Construimos todo tipo de edificaciones: viviendas urbanas y rurales, bodegas de almacenamiento industriales y comerciales, piscinas y jacuzzis con sistemas de filtración, y parques infantiles con materiales seguros y certificados. Desarrollamos cada proyecto de forma personalizada para adecuarse a las condiciones del terreno y las especificaciones del propietario, garantizando una edificación funcional, estética y perdurable.',
    image: 'https://www.image2url.com/r2/default/images/1777104585365-7febcae8-6377-4f8e-8250-1bd126aba57a.png',
    features: ['Viviendas', 'Bodegas industriales', 'Piscinas y jacuzzis', 'Parques infantiles', 'Llave en mano'],
    benefits: ['Calidad garantizada', 'Diseño personalizado', 'Materiales de primera', 'Asesoría integral'],
    projects: 67,
    category: 'construccion',
    featured: true,
  },
  {
    id: 'pavimentacion-obras-viales',
    icon: 'Route',
    title: 'Pavimentación y Obras Viales',
    description: 'Ejecutamos pavimentos rígidos, flexibles y placas huella para vías urbanas y rurales.',
    fullDescription: 'Ejecutamos proyectos de pavimentación empleando diversas tecnologías: pavimentos flexibles (asfalto), pavimentos rígidos (concreto) y placas huella, adaptándonos a las exigencias del proyecto y a las condiciones del terreno. Contamos con experiencia acreditada en contratación con entidades municipales del Eje Cafetero y otras regiones del país.',
    image: 'https://www.image2url.com/r2/default/images/1777102916994-a94a8a08-4321-4f1c-b6b7-58455303a4ca.png',
    features: ['Pavimento asfáltico', 'Pavimento en concreto', 'Placas huella', 'Mantenimiento vial'],
    benefits: ['Durabilidad', 'Tecnología adecuada', 'Acabados de calidad', 'Normatividad vial'],
    projects: 25,
    category: 'construccion',
    featured: true,
  },
  {
    id: 'infraestructura-hidrosanitaria',
    icon: 'Droplets',
    title: 'Infraestructura Hidrosanitaria',
    description: 'Diseñamos y construimos sistemas de acueducto, alcantarillado y redes eléctricas para proyectos urbanos y rurales.',
    fullDescription: 'Implementamos sistemas completos de acueducto y alcantarillado que garantizan el suministro de agua potable y la correcta disposición de aguas residuales. Asimismo, realizamos el diseño e instalación de redes eléctricas con estricto cumplimiento de la normatividad RETIE. Contamos con experiencia acreditada en la ejecución de contratos con empresas de servicios públicos, entre ellas Aquamaná E.S.P.',
    image: 'https://www.image2url.com/r2/default/images/1777103407181-12fcdb93-1ee5-4856-8ee2-0ffebf5dba4b.png',
    features: ['Redes de acueducto', 'Alcantarillado sanitario', 'Redes eléctricas', 'Sistemas de bombeo'],
    benefits: ['Normatividad vigente', 'Eficiencia hidráulica', 'Sostenibilidad', 'Impacto social positivo'],
    projects: 34,
    category: 'construccion',
    featured: true,
  },
  {
    id: 'obras-estabilizacion-estructuras',
    icon: 'Shield',
    title: 'Obras de Estabilización y Estructuras',
    description: 'Muros de contención, estabilización de taludes, estructuras metálicas y mantenimiento de puentes y estructuras.',
    fullDescription: 'Ejecutamos obras especializadas de estabilización geotécnica que garantizan la seguridad de terrenos y estructuras. Incluimos muros de contención en concreto reforzado, pantallas ancladas, zanjas de drenaje, gaviones y soil nailing. Fabricamos y montamos estructuras metálicas para cubiertas, naves industriales y puentes peatonales. Asimismo, realizamos mantenimiento integral de puentes y estructuras metálicas. Contamos con experiencia acreditada en contratación con la Alcaldía de Manizales.',
    image: 'https://www.image2url.com/r2/default/images/1777104361737-e752f2d3-4a08-4e30-b836-b0e759742c49.png',
    features: ['Muros de contención', 'Estabilización de taludes', 'Estructuras metálicas', 'Mantenimiento de puentes', 'Gaviones y soil nailing'],
    benefits: ['Seguridad estructural', 'Ingeniería geotécnica', 'Soluciones a medida', 'Normas técnicas'],
    projects: 46,
    category: 'construccion',
    featured: true,
  },
  // ─── B. DISEÑOS Y ESTUDIOS ───
  {
    id: 'diseno-estructural-arquitectonico',
    icon: 'FileText',
    title: 'Diseño Estructural y Arquitectónico',
    description: 'Cálculo estructural, diseños arquitectónicos y visualización 3D fotorrealista para todo tipo de proyecto.',
    fullDescription: 'Realizamos diseños estructurales completos empleando software especializado de última generación, incluyendo modelos matemáticos, memorias de cálculo, planos detallados y especificaciones técnicas que dan cumplimiento a la normatividad colombiana vigente (NSR-10). Creamos diseños arquitectónicos que conjugan estética, funcionalidad y sostenibilidad, entregando planos completos, renders 3D fotorrealistas y recorridos virtuales que permiten visualizar el resultado final previo a la ejecución de la obra.',
    image: 'https://www.image2url.com/r2/default/images/1777103631625-28e452a5-db2d-42ca-9e02-ac92173b32ce.png',
    features: ['Memorias de cálculo', 'Planos estructurales', 'Diseños arquitectónicos', 'Renders 3D', 'NSR-10'],
    benefits: ['Seguridad estructural', 'Optimización de materiales', 'Visualización previa', 'Cumplimiento normativo'],
    projects: 105,
    category: 'disenos',
    featured: true,
  },
  {
    id: 'estudios-tecnicos-topografia',
    icon: 'Compass',
    title: 'Estudios Técnicos y Topografía',
    description: 'Estudios de suelos, estudios de susceptibilidad, levantamientos topográficos y fotografía aérea con drones.',
    fullDescription: 'Realizamos estudios de suelos que incluyen perforaciones, ensayos de laboratorio, análisis de capacidad de carga y recomendaciones de cimentación. Elaboramos estudios de susceptibilidad que evalúan el riesgo de movimientos en masa e inundaciones, requisito fundamental para la obtención de licencias de construcción. Ejecutamos levantamientos topográficos con equipos de alta precisión y ofrecemos servicios de fotografía y videografía aérea con drones para el control de obras, inspecciones y promoción inmobiliaria.',
    image: 'https://www.image2url.com/r2/default/images/1777103901090-c39353aa-9c02-4cd4-89a4-4441dc5f04af.png',
    features: ['Estudio de suelos', 'Susceptibilidad', 'Topografía', 'Fotografía aérea con dron'],
    benefits: ['Alta precisión', 'Cumplimiento normativo', 'Reducción de riesgos', 'Información técnica completa'],
    projects: 100,
    category: 'disenos',
    featured: true,
  },
  // ─── C. SERVICIOS ADICIONALES ───
  {
    id: 'acabados-urbanizacion',
    icon: 'Paintbrush',
    title: 'Acabados y Urbanización',
    description: 'Acabados de alta calidad y urbanización integral de conjuntos campestres y residenciales.',
    fullDescription: 'Ofrecemos un servicio integral de acabados que comprende pinturas decorativas e industriales, enchapes en cerámica y porcelanato, revoques, carpintería metálica y acabados en madera. Todos nuestros materiales cumplen con las más exigentes especificaciones técnicas. Asimismo, desarrollamos proyectos de urbanización integral para conjuntos campestres y residenciales, incluyendo diseño urbanístico, construcción de vías internas, instalación de redes, zonas comunes, paisajismo y demarcación de lotes, brindando una solución llave en mano al cliente.',
    image: 'https://www.image2url.com/r2/default/images/1777104124620-e26bb2c5-b9f5-4225-ba26-06c01cad7dfe.png',
    features: ['Pinturas y enchapes', 'Carpintería metálica', 'Diseño urbanístico', 'Redes completas', 'Zonas comunes'],
    benefits: ['Calidad superior', 'Proyecto llave en mano', 'Variedad de materiales', 'Plusvalía'],
    projects: 53,
    category: 'adicionales',
    featured: true,
  },
  {
    id: 'venta-propiedades',
    icon: 'Home',
    title: 'Venta de Propiedades',
    description: 'Próximamente — Venta de propiedades residenciales y comerciales en el Eje Cafetero colombiano.',
    fullDescription: 'Disponemos de un portafolio de propiedades residenciales y comerciales ubicadas en las mejores zonas del Eje Cafetero colombiano. Brindamos asesoría integral y personalizada para la adquisición de terrenos, lotes, viviendas y proyectos en desarrollo.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    features: ['Casas', 'Lotes', 'Bodegas', 'Proyectos en desarrollo'],
    benefits: ['Mejores ubicaciones', 'Asesoría legal', 'Precios competitivos', 'Eje Cafetero'],
    projects: 0,
    category: 'adicionales',
    featured: true,
    comingSoon: true,
  },
]

// ═══════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════
export const testimonials = [
  {
    id: 1,
    name: 'Carlos Enrique Ospina',
    role: 'Administrador, Condominio El Líbano',
    content: 'Edificando Ingenieros construyó nuestra piscina social con acabados de excelente calidad. El cumplimiento estricto de los plazos y la calidad de la ejecución fueron sobresalientes. Entidad plenamente recomendada.',
    rating: 5,
    avatar: 'CO',
  },
  {
    id: 2,
    name: 'Ana María Londoño',
    role: 'Coordinación de Infraestructura Municipal, Villamaría',
    content: 'Ejecutamos las placas huella en las veredas San Julián y Pomos de forma impecable. La comunicación permanente y la calidad del resultado final beneficiaron a la totalidad de la comunidad rural del municipio.',
    rating: 5,
    avatar: 'AL',
  },
  {
    id: 3,
    name: 'Jorge Humberto Restrepo',
    role: 'Propietario, Bodega Visión Norte, Aranzazu',
    content: 'Las bodegas de almacenamiento en Cartama superaron nuestras expectativas. El diseño funcional y la calidad constructiva optimizan nuestra operación integral. Nos complace expresar nuestra plena satisfacción con los resultados obtenidos.',
    rating: 5,
    avatar: 'JR',
  },
  {
    id: 4,
    name: 'Diana Patricia Giraldo',
    role: 'Coordinación Técnica, Aquamaná E.S.P.',
    content: 'Hemos trabajado con Edificando Ingenieros en múltiples proyectos de acueducto y alcantarillado. Su capacidad técnica y el cumplimiento riguroso de los cronogramas los constituyen como un aliado estratégico confiable para el desarrollo de infraestructura hidrosanitaria.',
    rating: 5,
    avatar: 'DG',
  },
]

// ═══════════════════════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════════════════════
export const stats = [
  { label: 'Obras Ejecutadas', number: 110, suffix: '+', icon: 'Building2' },
  { label: 'Clientes Institucionales', number: 6, suffix: '+', icon: 'Users' },
  { label: 'Años de Experiencia', number: 10, suffix: '+', icon: 'Award' },
  { label: 'Municipios Beneficiados', number: 6, suffix: '+', icon: 'HardHat' },
]

// ═══════════════════════════════════════════════════════════
// PROCESS STEPS (6 PASOS)
// ═══════════════════════════════════════════════════════════
export const processSteps = [
  {
    number: 1,
    icon: 'Lightbulb',
    title: 'Conociendo su Propuesta',
    description: 'Escuchamos su propuesta y le asesoramos para dar forma al proyecto. Analizamos sus necesidades, presupuesto y plazos de ejecución con el fin de establecer una hoja de ruta clara y precisa.',
  },
  {
    number: 2,
    icon: 'PenTool',
    title: 'Anteproyecto',
    description: 'Realizamos diseños preliminares conforme a la normativa vigente y elaboramos un presupuesto detallado y transparente para su consideración.',
  },
  {
    number: 3,
    icon: 'FileText',
    title: 'Culminación de Diseños',
    description: 'Presentamos el proyecto completo, permitimos ajustes y ofrecemos asesoría permanente para su aprobación definitiva.',
  },
  {
    number: 4,
    icon: 'Shield',
    title: 'Licencias y Permisos',
    description: 'Gestionamos ante las entidades competentes la obtención de todos los avales, licencias y permisos requeridos para la ejecución de la obra.',
  },
  {
    number: 5,
    icon: 'Hammer',
    title: 'Ejecución de Obra',
    description: 'Desarrollamos las actividades constructivas con equipo calificado, seguimiento continuo de calidad, control de avances y estricto cumplimiento de los cronogramas establecidos.',
  },
  {
    number: 6,
    icon: 'Key',
    title: 'Entrega Final',
    description: 'Recorrido de verificación conjunta, entrega de estudios, planos, registro fotográfico, acta de recibo y garantías documentadas por escrito.',
  },
]

// ═══════════════════════════════════════════════════════════
// BLOG POSTS
// ═══════════════════════════════════════════════════════════
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Construcción en el Eje Cafetero: Trayectoria y Compromiso',
    slug: 'construccion-eje-cafetero-experiencia-compromiso',
    excerpt: 'Nuestra trayectoria en el Eje Cafetero: más de ciento diez proyectos que hemos ejecutado en obras de infraestructura pública y privada.',
    content: 'Hemos consolidado una presencia destacada en el Eje Cafetero colombiano con más de ciento diez proyectos que ejecutamos entre 2016 y 2024, abarcando pavimentos, estructuras, acueductos, estabilización de taludes y obras comunitarias. Es menester señalar que cada obra refleja nuestro compromiso inquebrantable con la excelencia técnica y el desarrollo regional.\n\n## Presencia en Caldas\n\nNuestra labor se concentra principalmente en el departamento de Caldas, con proyectos en Manizales, Chinchiná, Villamaría, Palestina y Aranzazu. Asimismo, hemos extendido nuestra presencia a Pereira, en Risaralda, así como a otros departamentos del centro y suroccidente colombiano.\n\n## Sector Público y Privado\n\nDesarrollamos proyectos tanto con el sector público (entidades municipales, empresas de servicios públicos como Aquamaná E.S.P.) como con el sector privado (condominios, propietarios privados y entidades corporativas), lo cual evidencia nuestra versatilidad y capacidad técnica. Tenemos el agrado de informar que la totalidad de nuestros contratos se han ejecutado con cabal cumplimiento de las obligaciones contraídas.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
    category: 'Eje Cafetero',
    author: 'Edificando Ingenieros',
    authorRole: 'Equipo Editorial',
    published: true,
    featured: true,
    createdAt: '2024-01-15',
    readTime: '5 min',
  },
  {
    id: '2',
    title: 'Estabilidad de Taludes en Manizales: Nuestra Experiencia Acreditada',
    slug: 'estabilidad-taludes-manizales-experiencia',
    excerpt: 'Conozca nuestra experiencia en obras de contención y estabilización de taludes en el municipio de Manizales.',
    content: 'La topografía accidentada de Manizales exige soluciones geotécnicas especializadas. En Edificando Ingenieros hemos ejecutado múltiples proyectos de estabilización para la Alcaldía de Manizales, contribuyendo a la seguridad de sus habitantes.\n\n## Proyectos Ejecutados\n\n- Muro La Carolita (2023)\n- Muro en talud (2018)\n- Muro Morrogacho (2018)\n- Estabilización de talud (2018)\n\n## Técnicas Implementadas\n\nEmpleamos muros de contención en concreto reforzado, sistemas de drenaje y técnicas de estabilización que garantizan la seguridad de las comunidades y la infraestructura circundante. Es menester destacar que la geotecnia constituye una de nuestras áreas de mayor especialización y experiencia acreditada.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=500&fit=crop',
    category: 'Ingeniería',
    author: 'Edificando Ingenieros',
    authorRole: 'Equipo Editorial',
    published: true,
    featured: false,
    createdAt: '2024-02-20',
    readTime: '6 min',
  },
  {
    id: '3',
    title: 'Infraestructura Hidrosanitaria en Alianza con Aquamaná E.S.P.',
    slug: 'infraestructura-hidrosanitaria-aquamana',
    excerpt: 'Nuestros proyectos de acueducto y alcantarillado en alianza con Aquamaná E.S.P. en Manizales.',
    content: 'Hemos trabajado de forma continua con Aquamaná E.S.P. en la construcción de infraestructura hidrosanitaria en Manizales, contribuyendo al mejoramiento del saneamiento básico de la ciudad. Nos complace destacar los resultados obtenidos en esta fructífera alianza institucional.\n\n## Proyectos Realizados\n\n- Colector San Carlos (2021)\n- Alcantarillado Cll 10 Entre 6 y 7 (2022)\n- Acueducto Cll 10 Entre 6 y 7 (2022)\n- Colector San Carlos - Detalle (2021)\n- Pavimento, alcantarillado y acueducto integral (2022)\n\n## Impacto Social\n\nEstos proyectos benefician a miles de familias manizaleñas, mejorando la cobertura de servicios públicos esenciales. Es menester señalar que el acceso a agua potable y alcantarillado constituye un factor determinante para la salud pública y la calidad de vida de la población.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
    category: 'Proyectos',
    author: 'Edificando Ingenieros',
    authorRole: 'Equipo Editorial',
    published: true,
    featured: true,
    createdAt: '2024-03-10',
    readTime: '5 min',
  },
  {
    id: '4',
    title: 'Obras Comunitarias en Chinchiná: Aporte al Desarrollo Social',
    slug: 'obras-comunitarias-chinchina-deporte-recreacion',
    excerpt: 'Gimnasios biosaludables, canchas deportivas y colegios: nuestro aporte al desarrollo comunitario de Chinchiná.',
    content: 'En Edificando Ingenieros concebimos la construcción como un aporte fundamental al desarrollo comunitario. En Chinchiná hemos ejecutado diversos proyectos que contribuyen al mejoramiento de la calidad de vida de sus habitantes.\n\n## Proyectos en Chinchiná\n\n- Colegio vereda El Trábol (2023) - Infraestructura educativa\n- Cancha vereda Naranjal (2023) - Infraestructura deportiva\n- Gimnasios Biosaludables (2023) - Salud y bienestar\n- Gimnasios Biosaludables - Otro sector (2023) - Ampliación de cobertura\n\n## Compromiso Social\n\nCada proyecto comunitario que ejecutamos representa una inversión en el bienestar de las generaciones presentes y futuras del Eje Cafetero. Tenemos el agrado de constatar que estas obras han generado un impacto positivo y perdurable en las comunidades beneficiarias.',
    image: 'https://images.unsplash.com/photo-1564429238961-bf8fe1b6d6a4?w=800&h=500&fit=crop',
    category: 'Comunidad',
    author: 'Edificando Ingenieros',
    authorRole: 'Equipo Editorial',
    published: true,
    featured: false,
    createdAt: '2024-04-05',
    readTime: '4 min',
  },
]
