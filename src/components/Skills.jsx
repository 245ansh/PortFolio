const skillCategories = {
  Languages: ['Java','C++',  'HTML', 'CSS','JavaScript',],
  Frameworks: ['SpringBoot', 'SpringMVC', 'Hibernate', 'ReactJS', 'TailwindCSS', 'Thymleaf'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS', 'Intelli', 'Linux', 'AWS'],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Maven'],
};

const logoMap = {
  'C++': 'src/assets/logos/C++.svg',
  'Java': 'src/assets/logos/Java.svg',
  'JavaScript': 'src/assets/logos/JavaScript.svg',
  'HTML': 'src/assets/logos/HTML.svg',
  'CSS': 'src/assets/logos/CSS.svg',
  'SpringBoot': 'src/assets/logos/SpringBoot.svg',
  'SpringMVC': 'src/assets/logos/SpringMVC.svg',
  'Hibernate': 'src/assets/logos/Hibernate.svg',
  'ReactJS': 'src/assets/logos/ReactJS.svg',
  'TailwindCSS': 'src/assets/logos/TailwindCSS.svg',
  'Thymleaf': 'src/assets/logos/Thymeleaf.svg',
  'Git': 'src/assets/logos/Git.svg',
  'GitHub': 'src/assets/logos/Github.svg',
  'Postman': 'src/assets/logos/Postman.svg',
  'VS': 'src/assets/logos/VS.svg',
  'Intelli': 'src/assets/logos/Intelli.svg',
  'Linux': 'src/assets/logos/Linux.svg',
  'AWS': 'src/assets/logos/AWS.svg',
  'MySQL': 'src/assets/logos/MySQL.svg',
  'PostgreSQL': 'src/assets/logos/PostgreSQL.svg',
  'MongoDB': 'src/assets/logos/MongoDB.svg',
  'Maven': 'src/assets/logos/Maven.svg',
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
