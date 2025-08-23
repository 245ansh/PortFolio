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
      <div className="flex flex-wrap justify-center items-center gap-4 px-6 py-2 max-w-[90vw] rounded-full shadow-xl border border-[#2e2e2e] bg-[#1a1a1a]/60 backdrop-blur-md text-sm text-gray-300">
        {/* Navigation Links */}
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
          href="/Finale.pdf"
          download
          className="text-red-500 hover:underline whitespace-nowrap"
        >
          Resume
        </a>
          <a
            href="https://github.com/245ansh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/logos/Github.png"
              alt="GitHub"
              className="w-5 h-5 object-contain"
            />
          </a>
          <a
            href="https://linkedin.com/in/ansh-tamrakar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/logos/Linkedin.svg"
              alt="LinkedIn"
              className="w-5 h-5 object-contain"
            />
          </a>
          <a
            href="https://boxd.it/adck5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/logos/Letterboxd.png"
              alt="Letterboxd"
              className="w-5 h-5 object-contain"
            />
          </a>
      </div>
    </motion.nav>
  );
}
