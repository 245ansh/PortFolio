import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nzgh767',         // ✅ Your EmailJS service ID
        'template_mxlxag7',        // ✅ Your EmailJS template ID
        formRef.current,           // ✅ Actual form DOM
        'ZVd1Kh1ta8wxWmgVQ'        // ✅ Your public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSubmitted(true);
          setForm({ name: '', email: '', message: '' }); // reset form state too
        },
        (error) => {
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full  text-white py-24 px-6 md:px-20"
    >
      <div className="flex justify-center">
      <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </motion.h2>
</div>


      <div className="max-w-3xl mx-auto">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#2a2a2a] p-8 rounded-xl text-center shadow-md border border-[#333]"
          >
            <h3 className="text-xl text-green-400 font-semibold mb-2">
              Thank you for reaching out!
            </h3>
            <p className="text-gray-300 text-sm">
              I’ve received your message and will get back to you as soon as I can. ✉️
            </p>
          </motion.div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-[#2a2a2a] p-8 rounded-xl shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-[#1a1a1a] p-3 rounded text-sm text-white placeholder-gray-400 border border-[#333] focus:outline-none focus:border-red-500"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-[#1a1a1a] p-3 rounded text-sm text-white placeholder-gray-400 border border-[#333] focus:outline-none focus:border-red-500"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="bg-[#1a1a1a] p-3 rounded text-sm text-white placeholder-gray-400 border border-[#333] focus:outline-none focus:border-red-500"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="bg-red-500 text-white py-2 rounded hover:bg-red-400 transition"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          

          {/* LinkedIn Card */}
          <motion.a
            href="https://linkedin.com/in/ansh-tamrakar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2a2a2a] p-6 rounded-xl border border-[#333] hover:border-blue-500/50 transition-all duration-300 text-center group"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Let's connect professionally</p>
              <span className="text-blue-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                View profile
              </span>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href="https://github.com/245ansh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2a2a2a] p-6 rounded-xl border border-[#333] hover:border-gray-500/50 transition-all duration-300 text-center group"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center group-hover:bg-gray-500/30 transition-colors">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold">GitHub</h3>
              <p className="text-gray-400 text-sm">Check out my projects</p>
              <span className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                View repositories
              </span>
            </div>
          </motion.a>
          {/* Email Card */}
          <motion.a
            href="https://letterboxd.com/245ansh/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2a2a2a] p-6 rounded-xl border border-[#333] hover:border-red-500/50 transition-all duration-300 text-center group"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                <img src="/logos/Letterboxd.png" alt="Letterboxd" className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold">Letterboxd</h3>
              <p className="text-gray-400 text-sm">Let's Review Together</p>
              <span className="text-red-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                View my Reviews
              </span>
            </div>
          </motion.a>
        </motion.div>

        <p className="text-center text-gray-400 mt-8">
          Or reach me directly: <span className="text-red-500">245anshtamrakar@gmail.com</span>
        </p>
      </div>
    </section>
  );
}
