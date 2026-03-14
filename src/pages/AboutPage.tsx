import { Link } from 'react-router-dom';

const experiences = [
  {
    year: '2022 - Presente',
    role: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    description: 'Liderando el desarrollo de aplicaciones web escalables usando React, Node.js y AWS. Coordinando equipos de 5 desarrolladores.'
  },
  {
    year: '2020 - 2022',
    role: 'Full Stack Developer',
    company: 'Startup Digital',
    description: 'Desarrollo de productos SaaS desde cero. Implementación de APIs RESTful y arquitecturas microservices.'
  },
  {
    year: '2018 - 2020',
    role: 'Frontend Developer',
    company: 'Agencia Web',
    description: 'Creación de sitios web responsivos y aplicaciones SPA para diversos clientes. Stack: React, Vue.js.'
  }
];

const education = [
  {
    year: '2016 - 2018',
    degree: 'Master in Computer Science',
    school: 'Universidad Tecnológica',
    description: 'Especialización en Sistemas Distribuidos y Cloud Computing.'
  },
  {
    year: '2012 - 2016',
    degree: 'Bachelor in Computer Science',
    school: 'Universidad Nacional',
    description: 'Fundamentos de programación, estructuras de datos y algoritmos.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 inline-flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Sobre Mí</h1>
        
        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Soy un desarrollador Full Stack apasionado por crear soluciones digitales que generan impacto real. 
            Con más de 6 años de experiencia en el industry, me especializo en construir aplicaciones web 
            performant, escalables y centradas en el usuario.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Mi trayectoria incluye trabajo en startups ágiles y empresas consolidadas, donde he aprendido 
            la importancia de equilibrar la calidad del código con los objetivos de negocio. Creo firmemente 
            que el mejor software es aquel que resuelve problemas reales de manera elegante.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, contribuyendo a 
            proyectos open source o compartiendo conocimiento con la comunidad developer.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experiencia Profesional</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-gray-300 dark:border-gray-600 pl-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.year}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Educación</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-gray-300 dark:border-gray-600 pl-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.school}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
