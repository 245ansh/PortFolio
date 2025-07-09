import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-4"
    >
      <div className="flex flex-wrap justify-center gap-4 px-6 py-2 max-w-[90vw] rounded-full shadow-xl border border-[#2e2e2e] bg-[#1a1a1a]/60 backdrop-blur-md text-sm text-gray-300">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-red-500 transition whitespace-nowrap"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-red-500 transition whitespace-nowrap"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-red-500 transition whitespace-nowrap"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-red-500 transition whitespace-nowrap"
        >
          Contact
        </ScrollLink>
        <a
          href="/Yess.pdf"
          download
          className="text-red-500 hover:underline whitespace-nowrap"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
