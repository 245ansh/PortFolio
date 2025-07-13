import { motion } from 'framer-motion';
import profileImage from '/profile.png'; 

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#1a1a1a] text-white py-24 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start justify-center gap-10"
    >
      <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="bg-[#a72020] w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl flex-shrink-0 mx-auto md:mx-0"
>

        <img
          src={profileImage}
          alt="Ansh Tamrakar"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-6 max-w-3xl text-sm sm:text-base"
      >
        <h2 className="text-3xl font-bold border-b border-red-500 inline-block pb-1">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
         I’m a passionate and evolving full stack developer who believes great software grows from strong roots. While my journey began with foundational logic in C/C++, my real growth took root in backend development.

I specialize in building robust, secure, and scalable systems using Java, Spring Boot, Hibernate, and Spring Security. I’ve architected RESTful APIs, implemented authentication flows, and integrated databases like MySQL and MongoDB to create reliable, data-driven applications.

On the frontend, I maintain clean, responsive interfaces using essential tools like HTML, CSS, JS and ReactJs.<br></br><br></br> I’m currently diving deeper into cloud deployment with AWS, and expanding into the DevOps landscape — exploring tools like EC2, S3, CI/CD pipelines, and infrastructure automation to streamline development and deployment workflows.

Outside the IDE, I enjoy reviewing movies and watching cricket. And yes — I like to think of my code like trees: deeply rooted in structure, branching with logic, and always Groot-approved.

</p>

        
      </motion.div>
    </section>
  );
}
