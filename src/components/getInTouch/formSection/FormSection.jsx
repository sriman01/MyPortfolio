import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

const FormSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm('service_4vheh95', 'template_0ugxohr', form.current, {
        publicKey: '0uXzPMe14WlL1Phuf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitStatus('success');
          setIsSubmitting(false);
          e.target.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(null), 5000);
        },
      );
  };

  return (
    <div className="w-full mx-auto glass-effect rounded-2xl p-8 border border-yellow-500/20">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full py-3 px-4 bg-[#1a1a2e] border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            required
          />
        </div>
        
        <div>
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            className="w-full py-3 px-4 bg-[#1a1a2e] border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            required
          />
        </div>
        
        <div>
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="w-full py-3 px-4 bg-[#1a1a2e] border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
            id="subject"
            type="text"
            name="subject"
            placeholder="Project Discussion"
            required
          />
        </div>
        
        <div>
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            className="w-full py-3 px-4 bg-[#1a1a2e] border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none h-32"
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            required
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:from-yellow-600 hover:to-yellow-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <SendIcon className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
          >
            ✓ Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
          >
            ✗ Something went wrong. Please try again or contact me directly.
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default FormSection;