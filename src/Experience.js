import React from 'react';

function Experience() {
  const experiences = [
    {
      company: 'McGill University',
      title: 'Undergraduate Research Assistant',
      date: 'May 2025 – Present',
      description: 'Assisting in the development of an automated tool to test login processes in Android apps. Learning Android development, test frameworks, and dynamic instrumentation.',
      logo: '/experience/mcgill.png',
      link: 'https://www.mcgill.ca'
    },
    {
      company: 'INBIZNET',
      title: 'Software Engineering Intern',
      date: 'May 2024 – Jul 2024',
      description: 'Built and tested internal web applications using Java, JSP and Spring Boot. Collaborated with senior engineers and contributed to feature development and debugging.',
      logo: '/experience/inbiznet.png',
      link: 'https://www.inbiznetcorp.com/Index.inbiz'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-12">Experience</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-6">
                {/* Logo */}
                <div className="flex-shrink-0 w-24 h-24 bg-white rounded-xl flex items-center justify-center">
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-20 h-20 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-12 h-12 bg-blue-500 rounded-lg hidden items-center justify-center text-white font-semibold">
                    {exp.company.charAt(0)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-1">
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-blue-600 transition-colors"
                        >
                          {exp.company}
                        </a>
                      </h2>
                      <p className="text-blue-600 font-medium">{exp.title}</p>
                    </div>
                    <span className="text-sm text-gray-500 mt-2 sm:mt-0">
                      {exp.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;