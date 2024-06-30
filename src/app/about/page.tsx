// pages/about.tsx

import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Our Company</h2>
          <p className="text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-lg leading-relaxed mb-4">For inquiries, reach out to us at:</p>
          <address className="text-lg leading-relaxed mb-6">
            123 Company Street, City, Country, 12345
          </address>
          <p className="text-lg leading-relaxed mb-6">Phone: +1 234 567 890</p>
          <p className="text-lg leading-relaxed mb-8">Email: info@example.com</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
