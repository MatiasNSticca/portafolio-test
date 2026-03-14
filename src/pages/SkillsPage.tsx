import { Link } from 'react-router-dom';

const skillCategories = [
  {
    name: 'Frontend',
    description: 'Interfaces modernas y experiencias de usuario fluidas',
    technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS', 'Sass']
  },
  {
    name: 'Backend',
    description: 'APIs robustas y arquitectura de servidor escalable',
    technologies: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs']
  },
  {
    name: 'DevOps & Cloud',
    description: 'Infraestructura moderna y deployment automatizado',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Vercel', 'Netlify']
  },
  {
    name: 'Herramientas',
    description: 'Stack de desarrollo y colaboración',
    technologies: ['Git', 'Figma', 'Jest', 'Agile/Scrum', 'VS Code', 'Chrome DevTools']
  }
];

const certifications = [
  { name: 'AWS Certified Developer', issuer: 'Amazon', year: '2024' },
  { name: 'Meta Front-End Developer', issuer: 'Meta', year: '2023' },
  { name: 'Advanced React Patterns', issuer: 'Frontend Masters', year: '2023' },
  { name: 'Node.js Microservices', issuer: 'Coursera', year: '2022' }
];

const tools = [
  'VS Code', 'Docker Desktop', 'Postman', 'Figma', 'GitHub', 'GitLab', 
  'Jira', 'Notion', 'Slack', 'Zoom', 'Chrome DevTools', 'Vercel', 'Netlify'
];

const currentStack = [
  { icon: '⚛️', name: 'React', role: 'Mi elección principal para interfaces' },
  { icon: '📘', name: 'TypeScript', role: 'Tipo seguro en todo mi código' },
  { icon: '🟢', name: 'Node.js', role: 'Backend y APIs' },
  { icon: '🎨', name: 'Tailwind', role: 'Estilos rápidos y consistentes' },
  { icon: '🔵', name: 'PostgreSQL', role: 'Base de datos relacional' },
  { icon: '🐳', name: 'Docker', role: 'Contenedores para todo' },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 inline-flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Tecnologías</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Tecnologías con las que trabajo y herramientas que domino.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Mi Stack Actual</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentStack.map((item) => (
              <div key={item.name} className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow">
                <span className="text-3xl mr-4">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div key={category.name} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Certificaciones</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                </div>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Herramientas Favoritas</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
