import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Full Stack',
    image: '🛒',
    client: 'RetailCorp',
    year: '2024',
    description: 'Plataforma de comercio electrónico enterprise con gestión de inventario en tiempo real, procesamiento de pagos con Stripe y panel de administración completo.',
    challenge: 'El cliente necesitaba migrar desde un sistema legacy a una arquitectura moderna que pudiera manejar más de 10,000 productos y 1,000 pedidos diarios con alta disponibilidad.',
    solution: 'Implementé una arquitectura de microservicios usando Node.js y PostgreSQL, con Redis para caché y WebSockets para actualizaciones en tiempo real. El frontend en React con Next.js para SEO optimizado.',
    results: [
      'Tiempo de carga reducido en 60%',
      'Manejo de 10x más tráfico sin degradación',
      'Incremento del 35% en conversiones'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'SaaS',
    image: '📋',
    client: 'ProductivityHub',
    year: '2023',
    description: 'Aplicación de gestión de proyectos colaborativa con tableros Kanban, asignaciones, comments en tiempo real y métricas de productividad.',
    challenge: 'Crear una experiencia de usuario fluida que permitiera a equipos de hasta 100 personas colaborar sin conflictos de edición y con sincronización instantánea.',
    solution: 'Firebase para backend realtime, CRDTs para conflict resolution y una interfaz en React con optimizaciones de renderizado para manejar miles de tareas sin lag.',
    results: [
      'Adopción por 500+ equipos',
      '4.8 estrellas en App Store',
      '99.9% uptime'
    ],
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Figma'],
    link: '#'
  },
  {
    id: 3,
    title: 'Portfolio Generator',
    category: 'Herramienta',
    image: '🎨',
    client: 'Freelancers',
    year: '2023',
    description: 'Herramienta SaaS que permite a profesionales crear portfolios personalizados con múltiples temas, exportables a PDF y publicables como sitios web.',
    challenge: 'Ofrecer una solución que fuera lo suficientemente flexible para adaptarse a cualquier profesión pero simple de usar sin conocimientos técnicos.',
    solution: 'Editor drag-and-drop con templates predefinidos, sistema de theming basado en CSS variables y generación estática con Next.js para deployments instantáneos.',
    results: [
      '50,000+ portfolios creados',
      'NPS de 72',
      'Featured en Product Hunt'
    ],
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Vercel', 'Stripe'],
    link: '#'
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    category: 'Full Stack',
    image: '🏠',
    client: 'InmueblesPlus',
    year: '2022',
    description: 'Portal inmobiliario con búsqueda avanzada, tours virtuales 360°, agendamiento de citas y integración con CRM de agentes.',
    challenge: 'Implementar tours virtuales interactivos que funcionaran en dispositivos móviles sin comprometer la calidad de imagen.',
    solution: 'WebGL para visualización 360°, optimización de imágenes con lazy loading y compression, y PWA para experiencia nativa en móviles.',
    results: [
      '200% increase in leads',
      '50% reducción en tiempo de cierre',
      'Premio Best Real Estate App 2022'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Three.js', 'WebRTC'],
    link: '#'
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 inline-flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Proyectos</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Casos de estudio detallados de proyectos que demuestran mi experiencia y enfoque.
        </p>

        <div className="space-y-20">
          {projects.map((project) => (
            <article key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">{project.client}</span>
                  <span className="text-gray-500 dark:text-gray-400">{project.year}</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Desafío</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Solución</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{project.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Resultados</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <a href={project.link} className="inline-flex items-center text-gray-900 dark:text-white font-medium hover:underline">
                  Ver proyecto live
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
