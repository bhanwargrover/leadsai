import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-16 px-4 sm:px-6 lg:px-8 relative flex flex-col items-center justify-center text-center">
      <Circles />
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading Center */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-10 px-2 sm:px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white pt-4">
            My services <span className="text-accent">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto pt-14">
            Ready to grow your business online? Our digital marketing service
            covers everything — social media, paid ads, SEO, and even AI tools
            — all designed to bring in real results. We don’t just post or
            promote, we plan and track every move to help your brand reach the
            right audience at the right time.
          </p>
        </motion.div>

        {/* Cards Below */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full px-2"
        >
          <ServiceSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
