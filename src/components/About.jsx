import { motion } from 'framer-motion';
import profileImage from '/pfp.jpg'; 

export default function About() {
  return (
    <section
      id="about"
      className="w-full  text-white py-24 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start justify-center gap-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -40, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative group flex-shrink-0 mx-auto md:mx-0"
      >
        {/* Animated outer glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-3xl blur-md opacity-60 group-hover:opacity-90 transition-all duration-400 transform group-hover:scale-110 animate-pulse-slow"></div>
        
        {/* Secondary glow layer */}
        <div className="absolute inset-2 bg-gradient-to-br from-red-400/30 to-red-600/30 rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-all duration-400"></div>
        
        {/* Main image container with premium styling */}
        <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] p-2 rounded-3xl shadow-2xl transform transition-all duration-400 group-hover:scale-108 group-hover:shadow-red-500/30 group-hover:shadow-3xl">
          {/* Inner premium border */}
          <div className="absolute inset-2 bg-gradient-to-br from-red-600/15 via-red-700/10 to-red-800/15 rounded-2xl backdrop-blur-sm"></div>
          
          {/* Image with maximum size and premium effects */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-84 md:h-84 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-2xl overflow-hidden border border-red-500/20">
            <img
              src={profileImage}
              alt="Ansh Tamrakar"
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-115 group-hover:brightness-110 filter contrast-105"
            />
            
            {/* Premium overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            {/* Reddish background overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-red-700/15 to-red-800/25 opacity-0 group-hover:opacity-100 transition-all duration-600 mix-blend-overlay"></div>
            
            {/* Shimmer effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
        
        {/* Enhanced corner accents with animation */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-3 border-l-3 border-red-500 rounded-tl-xl transition-all duration-300 group-hover:border-red-400 group-hover:scale-125"></div>
        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-3 border-r-3 border-red-500 rounded-tr-xl transition-all duration-300 group-hover:border-red-400 group-hover:scale-125"></div>
        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-3 border-l-3 border-red-500 rounded-bl-xl transition-all duration-300 group-hover:border-red-400 group-hover:scale-125"></div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-3 border-r-3 border-red-500 rounded-br-xl transition-all duration-300 group-hover:border-red-400 group-hover:scale-125"></div>
        
        {/* Floating particles effect */}
        <div className="absolute -top-4 -right-4 w-2 h-2 bg-red-500 rounded-full opacity-60 animate-float-1"></div>
        <div className="absolute -bottom-4 -left-4 w-1.5 h-1.5 bg-red-400 rounded-full opacity-50 animate-float-2"></div>
        <div className="absolute top-1/2 -left-6 w-1 h-1 bg-red-600 rounded-full opacity-40 animate-float-3"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-6 max-w-3xl text-sm sm:text-base"
      >
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-4xl md:text-5xl font-bold "
        >
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>
                
        
        {/* Enhanced Description */}
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            <span className="text-red-400 font-semibold">Full Stack Developer</span> with a passion for building robust, scalable systems and creating innovative digital solutions that make a difference.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I specialize in architecting secure backend solutions using Java, Spring Boot, Hibernate, and Spring Security, with extensive experience in RESTful API design and database integration.
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            Currently expanding my expertise into cloud deployment with AWS services including EC2, S3, and exploring DevOps practices with CI/CD pipelines and infrastructure automation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-4 bg-gradient-to-br from-red-900/20 to-red-700/10 rounded-lg border border-red-500/20"
          >
            <div className="text-2xl font-bold text-red-400">10+</div>
            <div className="text-xs text-gray-400">Projects</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-4 bg-gradient-to-br from-red-900/20 to-red-700/10 rounded-lg border border-red-500/20"
          >
            <div className="text-2xl font-bold text-red-400">3+</div>
            <div className="text-xs text-gray-400">Years Learning</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-4 bg-gradient-to-br from-red-900/20 to-red-700/10 rounded-lg border border-red-500/20"
          >
            <div className="text-2xl font-bold text-red-400">15+</div>
            <div className="text-xs text-gray-400">Technologies</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center p-4 bg-gradient-to-br from-red-900/20 to-red-700/10 rounded-lg border border-red-500/20"
          >
            <div className="text-2xl font-bold text-red-400">100%</div>
            <div className="text-xs text-gray-400">Dedication</div>
          </motion.div>
        </div>
          {/* Personal Interests */}
          <div className="mt-6 p-4 bg-gradient-to-r from-red-900/10 to-red-700/5 rounded-lg border-l-4 border-red-500">
            <h3 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Beyond Code
            </h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-red-500">✈️</span>
                <span className="text-gray-300">Hodophile at Core</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">🏏</span>
                <span className="text-gray-300">Cricket enthusiast and strategic thinker</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">🎬</span>
                <span className="text-gray-300">Movie reviewer with critical eye</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">🌳</span>
                <span className="text-gray-300">I am Groot - deeply rooted in code</span>
              </div>
            </div>
          </div>
        </div>
        
      </motion.div>
    </section>
  );
}
