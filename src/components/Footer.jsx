import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400 py-10 px-6 md:px-20 mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="text-center md:text-left">
          <p className="text-sm">
            Designed & coded with ❤️ and a little help from <span className="text-red-500">Groot</span>.
          </p>
          <p className="text-xs mt-1 text-gray-500 italic">
            "Looking forward for more..."
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center text-sm text-gray-400">
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
      </motion.div>
    </footer>
  );
}
