import React from "react";

const DigitalGoalsSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="w-full px-20 mx-auto grid grid-cols-12  gap-8 items-center">
        {/* Left Section: Heading and Stats */}
        <div className="col-span-7">
          {/* Heading */}
          <h2 className="text-[54px] font-bold mb-12 pb-12 max-w-7xl">
            Let our experienced team elevate your digital goals
          </h2>

          {/* Stats */}
          <div className="flex  gap-16">
            <div>
              <p className="text-[54px] font-bold mb-2">250</p>
              <p className="text-gray-700 text-[24px]">Five-Star Reviews</p>
            </div>
            <div>
              <p className="text-[54px] font-bold mb-2">10</p>
              <p className="text-gray-700 text-[24px]">In-House Experts</p>
            </div>
          </div>
        </div>

        {/* Right Section: Description */}
        <div className="col-span-5 flex items-end justify-end mt-auto">
          <p className="text-gray-700 text-[24px] leading-relaxed ">
            We have successfully completed over 300+ projects from a variety of
            industries. In our team, designers work alongside developers and
            digital strategists, we believe this is our winning recipe for
            creating digital products that make an impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalGoalsSection;
