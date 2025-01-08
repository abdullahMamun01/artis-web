import React from "react";

const ServicesSection = () => {
  return (
    <div className="grid grid-cols-12 md:flex-row items-start justify-between px-6 md:px-12 lg:px-24 py-20 bg-white">
      {/* Left Section */}
      <div className=" mb-8 md:mb-0 col-span-5">
        <h2 className="text-[54px] font-bold mb-4">We're good at</h2>
        <h6 className="text-[16px] text-gray-600 font-md mb-4">Services</h6>
        <ul className="space-y-3 text-lg leading-[3rem] ">
          {[
            "E-Commerce",
            "Website Design",
            "Web Development",
            "Digital Products",
            "Brand Identities",
            "SEO Optimisation",
          ].map((service, index) => (
            <li key={index} className="font-semibold text-gray-800 text-[31px] ">
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className=" mt-auto col-span-7 bg-[#545CFF] text-white p-6 md:p-12 rounded-[30px]">
        <p className="text-[40px]  font-semibold mb-6">
          Let's start with a conversation about how we can help you! Get in
          touch, we're a nice bunch.
        </p>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-gray-800 font-lg py-4 text-[24px] rounded-full px-12 shadow-lg hover:bg-gray-100">
            Let's Talk
          </button>
          <a
            href="tel:02071128285"
            className="bg-transparent border border-gray-400 text-white font-bold py-4 text-[24px] rounded-full px-12 shadow-lg "
          >
            0207 112 82 85
          </a>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-black via-blue-500 to-purple-600 mt-8"></div> */}
    </div>
  );
};

export default ServicesSection;
