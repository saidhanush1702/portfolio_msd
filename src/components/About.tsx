import { Code, Database, Cpu, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'MERN stack expertise with production-ready applications',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'MongoDB, Firebase, and MySQL architecture',
    },
    {
      icon: Cpu,
      title: 'AI/ML Basics',
      description: 'Machine learning fundamentals and implementation',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Strong collaboration and leadership skills',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-purple-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a Computer Science & Engineering student at JNTUH, set to graduate in 2026,
              with a strong passion for building innovative, end-to-end applications that solve
              real-world problems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With expertise in the MERN stack, data structures, backend systems, and foundational
              knowledge in AI/ML, I thrive on turning complex challenges into elegant solutions.
              My experience spans from freelance projects attracting 500+ monthly visitors to
              internships where I've improved customer engagement by 25% and system responsiveness by 40%.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I'm a problem-solver at heart—having solved 500+ DSA problems and
              earned multiple awards in competitive programming. I believe in continuous learning,
              humility, and the power of collaboration to create exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
