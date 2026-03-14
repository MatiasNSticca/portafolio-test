import { Link } from 'react-router-dom';

const experiences = [
  {
    period: '2023 - Presente',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'Remote',
    type: 'Full-time',
    description: 'Liderando el desarrollo de la plataforma principal de la empresa, mejorando la arquitectura y reduciendo deuda técnica.',
    highlights: [
      'Arquitectura de microservicios con Node.js y TypeScript',
      'Liderando equipo de 5 desarrolladores junior',
      'Implementación de CI/CD reduciendo deployment time en 70%',
      'Migration de monolith a serverless架构'
    ],
    tech: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker']
  },
  {
    period: '2021 - 2023',
    title: 'Full Stack Developer',
    company: 'StartupHub',
    location: 'Buenos Aires, Argentina',
    type: 'Full-time',
    description: 'Desarrollo de producto SaaS desde cero hasta 10,000 usuarios activos. Crecimiento del equipo de 2 a 8 personas.',
    highlights: [
      'Creación de MVP en 3 meses',
      'Implementación de pagos con Stripe ($50k MRR)',
      'Diseño y desarrollo de API RESTful',
      'Integración con herramientas de terceros'
    ],
    tech: ['React', 'Next.js', 'Python', 'MongoDB', 'Redis', 'Firebase']
  },
  {
    period: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    location: 'Buenos Aires, Argentina',
    type: 'Full-time',
    description: 'Desarrollo de sitios web y aplicaciones para clientes de diversos industrias, desde startups hasta empresas Fortune 500.',
    highlights: [
      '30+ proyectos entregados exitosamente',
      'Especialización en React y Vue.js',
      'Implementación de design systems',
      'Optimización de performance (Core Web Vitals)'
    ],
    tech: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'GraphQL']
  },
  {
    period: '2018 - 2019',
    title: 'Junior Developer',
    company: 'WebStudio',
    location: 'Buenos Aires, Argentina',
    type: 'Full-time',
    description: 'Primeros pasos en el desarrollo profesional, aprendiendo las mejores prácticas y trabajando en proyectos reales.',
    highlights: [
      'Desarrollo de landing pages y e-commerce',
      'Aprendizaje de Git y metodologías ágiles',
      'Colaboración con diseñadores UX/UI',
      'Primeros proyectos con React'
    ],
    tech: ['JavaScript', 'HTML/CSS', 'jQuery', 'WordPress', 'PHP']
  }
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 inline-flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experiencia Profesional</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Mi trayectoria profesional en el desarrollo web.
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 md:left-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gray-900 dark:bg-white rounded-full transform -translate-x-1/2 mt-1.5"></div>
                
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <span className="inline-block px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded-full mb-3">
                      {exp.period}
                    </span>
                    
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.company}</p>
                    
                    <div className="flex items-center gap-3 mt-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Logros destacados</h3>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">¿Interesado en trabajar juntos?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Siempre estoy abierto a nuevas oportunidades y proyectos interesantes.
          </p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            Hablemos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
