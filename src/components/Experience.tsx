import { Briefcase, TrendingUp, Users, Zap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Full-Stack Developer',
      type: 'Freelancer',
      period: 'Mar 2025 – Jul 2025',
      website: 'https://rhythmxwithshiva.com/',
      achievements: [
        'Built and deployed a full MERN-based dance studio website attracting 500+ monthly visitors',
        'Created comprehensive admin dashboard for comments, inbox, and gallery management',
        'Achieved 95% Lighthouse performance score',
        'Integrated Firebase authentication & storage, reducing manual work by 70%',
      ],
      stats: [
        { icon: Users, label: '500+', description: 'Monthly Visitors' },
        { icon: TrendingUp, label: '95%', description: 'Lighthouse Score' },
        { icon: Zap, label: '70%', description: 'Work Reduction' },
      ],
    },
    {
      role: 'JavaScript Developer Intern',
      type: 'Internship',
      period: 'Apr 2024 – May 2024',
      achievements: [
        'Built & optimized LiveChat ChatBot, improving customer engagement by 25%',
        'Developed GSAP-based interactive components, increasing responsiveness by 40%',
        'Delivered production-ready features as part of a 5-member team',
        'Collaborated on code reviews and agile development practices',
      ],
      stats: [
        { icon: TrendingUp, label: '25%', description: 'Engagement Boost' },
        { icon: Zap, label: '40%', description: 'Responsiveness' },
        { icon: Users, label: '5', description: 'Team Members' },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                    <p className="text-purple-600 font-semibold">{exp.type}</p>
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        {exp.website}
                      </a>
                    )}
                  </div>
                </div>
                <span className="px-4 py-2 bg-white rounded-lg text-purple-700 font-semibold text-sm shadow-sm">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-purple-200">
                {exp.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-2xl font-bold text-purple-600">{stat.label}</p>
                    <p className="text-xs text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
