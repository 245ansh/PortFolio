import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="w-max px-10 py-3 rounded-full shadow-xl border border-[#2e2e2e] bg-[#1a1a1a]/60 backdrop-blur-md flex gap-6 text-sm text-gray-300">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-red-500 transition"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-red-500 transition"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-red-500 transition"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-red-500 transition"
        >
          Contact
        </ScrollLink>
        <a
          href="/Yess.pdf"
          download
          className="text-red-500 hover:underline"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
