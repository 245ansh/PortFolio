const skillCategories = {
  Languages: ['Java','C++',  'HTML', 'CSS','JavaScript',],
  Frameworks: ['SpringBoot', 'SpringMVC', 'Hibernate', 'ReactJS', 'TailwindCSS', 'Thymleaf'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS', 'Intelli', 'Linux', 'AWS'],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Maven'],
};

const logoMap = {
  'C++': '/logos/C++.svg',
  'Java': '/logos/Java.svg',
  'JavaScript': '/logos/JavaScript.svg',
  'HTML': '/logos/HTML.svg',
  'CSS': '/logos/CSS.svg',
  'SpringBoot': '/logos/SpringBoot.svg',
  'SpringMVC': '/logos/SpringMVC.svg',
  'Hibernate': '/logos/Hibernate.svg',
  'ReactJS': '/logos/ReactJS.svg',
  'TailwindCSS': '/logos/TailwindCSS.svg',
  'Thymleaf': '/logos/Thymeleaf.svg',
  'Git': '/logos/Git.svg',
  'GitHub': '/logos/Github.svg',
  'Postman': '/logos/Postman.svg',
  'VS': '/logos/VS.svg',
  'Intelli': '/logos/Intelli.svg',
  'Linux': '/logos/Linux.svg',
  'AWS': '/logos/AWS.svg',
  'MySQL': '/logos/MySQL.svg',
  'PostgreSQL': '/logos/PostgreSQL.svg',
  'MongoDB': '/logos/MongoDB.svg',
  'Maven': '/logos/Maven.svg',
};

export default function Skills() {
  return (
    <section id="skills" className="bg-[#1a1a1a] text-white py-12 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 border-b border-red-500 inline-block">
        Skills & Technologies
      </h2>

      <div className="flex flex-col gap-16">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div
            key={category}
            className="bg-[#1d1d1d] rounded-lg shadow-md shadow-red-500/10 p-4 md:p-6"
          >
            <h3 className="text-xl text-red-500 font-semibold mb-6 capitalize border-l-4 border-red-500 pl-3">
              {category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center justify-items-center">
              {skills.map((skill, index) => {
                const icon = logoMap[skill];
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 text-xs bg-[#2f2f2f] p-3 rounded-md shadow hover:shadow-red-500/20 transition-all duration-200"
                  >
                    <img
                      src={icon}
                      alt={skill}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-gray-300 text-center">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
