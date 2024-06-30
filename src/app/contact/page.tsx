// pages/contact.tsx

import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-1">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-1">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Your Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-1">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div className="mt-6">
              <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
