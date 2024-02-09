import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'
const FormSection = () => {
  // const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const form = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm('service_4vheh95', 'template_0ugxohr', form.current, {
      publicKey: '0uXzPMe14WlL1Phuf',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    e.target.reset();
  };

  return (
    <div className="px-10 py-8 md:py-12 xl:py-15 2xl:py-20 w-full mx-auto bg-purple-900 bg-opacity-40  md:rounded-r-xl shadow-md ">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white  text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            name="subject"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-yellow-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;