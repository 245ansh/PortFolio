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
      className="w-full bg-[#1a1a1a] text-white py-24 px-6 md:px-20"
    >
      <div className="flex justify-center">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-20 border-b border-red-500 pb-2"
  >
    Contact Me
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

        <p className="text-center text-gray-400 mt-6">
          Or reach me directly: <span className="text-red-500">245anshtamrakar@gmail.com</span>
        </p>
      </div>
    </section>
  );
}
