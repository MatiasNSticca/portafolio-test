const skills = [
  'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL',
  'MongoDB', 'Git', 'AWS', 'Docker', 'Figma'
];

export default function About() {
  return (
    <section id="about" className="h-screen flex items-center bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Sobre Mí
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Soy un desarrollador Full Stack apasionado por crear soluciones web que marquen la diferencia. 
              Con experiencia en el stack MERN y tecnologías modernas, me especializo en construir 
              aplicaciones escalables y performant.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Mi enfoque combina habilidades técnicas sólidas con una comprensión profunda de la 
              experiencia de usuario. Creo que el mejor código es aquel que es maintainable, 
              accesible y que resolve problemas reales.
            </p>
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
