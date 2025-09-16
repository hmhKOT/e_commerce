import React from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { fadeInUp } from "../../../shared/utils/animations";
function About() {
  return (
    <div>
      <section className="bg-bg py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 ">
            {/* Title (left large) */}
            <div className="lg:col-span-7">
              <Reveal
                withMask
                maskColor="bg-white"
                distance={50}
                duration={0.6}
                delay={0.05}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="font-serif text-4xl md:text-6xl leading-tight text-[#243243]"
                >
                  The mission & story
                  <br />
                  behind Ranchflow
                </motion.h2>
              </Reveal>
            </div>

            {/* Short intro (right small) */}
            <div className="lg:col-span-5 relative">
              <div className=" absolute bottom-0">
                <Reveal distance={30} duration={0.6} delay={0.12}>
                  <motion.p
                    variants={fadeInUp}
                    className="text-sm text-gray-700 "
                  >
                    Mauris et turpis dignissim posuere lectus sit risus lobortis
                    nunc odio ultrices diam tempus quisque mi volutpat at odio
                    neque enim amet fames porttitor arcu convallis.
                  </motion.p>
                </Reveal>
              </div>
            </div>
          </div>
          {/* Content Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  ">
            <div className="lg:col-span-7">
              <Reveal distance={30} duration={0.6} delay={0.18}>
                <motion.img
                  variants={fadeInUp}
                  src="https://cdn.prod.website-files.com/66aa7f35b565f5e5b5085d9d/66b27a99e4bbe3e9e2a3b87f_the-mission-and-story-behind-farm-left-image-farmer-x-webflow-template.jpg"
                  alt="About us"
                  className="w-full h-auto  shadow-lg mb-12"
                />
              </Reveal>
              <Reveal distance={30} duration={0.6} delay={0.18}>
                <motion.p variants={fadeInUp}>
                  Blandit morbi nascetur cras pulvinar tellus vulputate
                  fermentum massa rhoncus egestas diam pulvinar aenean bibendum
                  at cras non eget quisque morbi quam sapien sit sed ac ac
                  pellentesque cras rutrum sit ac faucibus non luctus vulputate
                  egestas libero felis malesuada quis nascetur litum roes dies
                  nisi laboris dolore pellentesque consectetur nulla sed eu.
                </motion.p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal distance={30} duration={0.6} delay={0.18}>
                <motion.img
                  variants={fadeInUp}
                  src="https://cdn.prod.website-files.com/66aa7f35b565f5e5b5085d9d/66b27a99bdc416744f0975d0_the-mission-and-story-behind-farm-right-image-farmer-x-webflow-template.jpg"
                  alt="About us"
                  className="w-full h-auto  shadow-lg"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
