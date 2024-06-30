import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const footerData = {
  sections: [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "How to Buy", href: "#" },
        { name: "Sell Your Car", href: "#" },
        { name: "Finance", href: "#" },
        { name: "Insurance", href: "#" },
      ],
    },
    {
      title: "Our Brands",
      links: [
        { name: "Audi", href: "#" },
        { name: "BMW", href: "#" },
        { name: "Mercedes", href: "#" },
        { name: "Tesla", href: "#" },
      ],
    },
    {
      title: "Vehicle Types",
      links: [
        { name: "SUV", href: "#" },
        { name: "Sedan", href: "#" },
        { name: "Truck", href: "#" },
        { name: "Coupe", href: "#" },
      ],
    },
    {
      title: "Sale Hours",
      info: "Mon - Sat: 9am - 6pm\nSun: Closed",
      connect: "Connect with Us",
    },
  ],
  socialMedia: [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ],
  footerNote: "© 2023 example.com. All rights reserved.",
  terms: { name: "Terms & Conditions", href: "#" },
  privacy: { name: "Privacy Notice", href: "#" },
};

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-8 px-4 md:py-20 md:px-40 border-t border-gray-200">
        {footerData.sections.map((section) => (
          <div key={section.title} className="text-center md:text-left">
            <h4 className="text-lg font-bold">{section.title}</h4>
            <ul className="mt-4 space-y-2">
              {section.links ? (
                section.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900">
                      {link.name}
                    </a>
                  </li>
                ))
              ) : (
                <>
                  <p className="text-gray-600 whitespace-pre-line">{section.info}</p>
                  {section.connect && (
                    <>
                      <h5 className="text-md font-bold mt-4">{section.connect}</h5>
                      <div className="flex justify-center md:justify-start space-x-4 mt-2">
                        {footerData.socialMedia.map((social, index) => (
                          <a key={index} href={social.href} className="text-gray-600 hover:text-gray-900">
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="p-4 md:p-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">{footerData.footerNote}</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href={footerData.terms.href} className="text-gray-600 hover:text-gray-900">
            {footerData.terms.name}
          </a>
          <a href={footerData.privacy.href} className="text-gray-600 hover:text-gray-900">
            {footerData.privacy.name}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
