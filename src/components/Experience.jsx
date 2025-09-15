import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: "Full Stack Java Intern",
    company: "Adyanta Semiconductors",
    location: "Pune, Maharashtra",
    period: "July 2025 – Present",
    description: "Currently working as a Full Stack Java Intern, developing comprehensive training modules and IoT device management platforms using modern technologies and deployment strategies.",
    achievements: [
      "Developed comprehensive training module with React.js, Spring Boot, MySQL, and Supabase for user enrollment and authentication, improving training participation by 25% through intuitive workflows and real-time progress tracking",
      "Configured multi-service deployments on local environments using Kubernetes and Ansible to automate server setups and environment replication, reducing deployment time by 20% and optimizing system stability",
      "Automated CI/CD pipelines using Jenkins, streamlining build, test, and deployment processes, increasing deployment frequency by 50% and minimizing human error",
      "Enhanced IoT device management platform using Nginx, MQTT, MySQL, and Spring Boot for real-time device monitoring and configuration, refining system uptime by 35% during high-load scenarios"
    ],
    technologies: ["Springboot", "ReactJs", "Tailwind", "Supabase", "Jenkins", "Kubernetes", "Nginx", "Ansible"]
  },
  {
    id: 2,
    title: "Virtual Intern - Networking",
    company: "Cisco",
    location: "Remote",
    period: "Aug 2024 - Sep 2024",
    description: "Participated in Cisco's Virtual Internship program focusing on advanced networking concepts. Gained hands-on experience with network configuration, routing protocols, and troubleshooting techniques.",
    achievements: [
      "Completed Cisco's Virtual Internship program with focus on advanced networking concepts",
      "Gained hands-on experience with network configuration and routing protocols",
      "Developed troubleshooting techniques for network issues",
      "Completed tasks and projects involving real-world network design simulations and optimization strategies"
    ],
    technologies: ["Networking", "Routing Protocols", "Network Design",]
  }
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-transparent"></div>
      
      <div className="flex items-start gap-6">
        {/* Timeline Dot */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="relative z-10 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </motion.div>
        
        {/* Experience Content */}
        <div className="flex-1 bg-[#2a2a2a] p-6 rounded-xl border border-[#333] hover:border-red-500/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
              <p className="text-red-500 font-semibold">{experience.company}</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <p className="text-gray-400 text-sm">{experience.location}</p>
              <p className="text-red-400 text-sm font-medium">{experience.period}</p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-4">{experience.description}</p>
          
          <div className="mb-4">
            <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 text-gray-400 text-sm"
                >
                  <span className="text-red-500 mt-1">•</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs border border-red-500/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="text-white py-16 px-4 md:px-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </motion.h2>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
