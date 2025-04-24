import { motion } from "framer-motion";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxActivityLog,
} from "react-icons/rx";

// Animation variant
const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
};

// Service Data
const serviceData = [
  {
    Icon: RxCrop,
    title: "Brand & Growth Strategy",
    description:
      "Tress Lounge Franchise Strategy – helped structure brand narrative and sales strategy for 75 franchise units at $600K CAD each.",
  },
  {
    Icon: RxPencil2,
    title: "Performance Marketing",
    description:
      "Lead generation strategy & automation for Tress Lounge.",
  },
  {
    Icon: RxDesktop,
    title: "Social & Content Strategy",
    description:
      "Built social content plan for ValidLeads.ai pre-launch.",
  },
  {
    Icon: RxReader,
    title: "SEO & Website Optimization",
    description:
      "Full-site audit and SEO strategy for VisualAccent (Darwin, Australia).",
  },
  {
    Icon: RxRocket,
    title: "AI Solutions for Growth",
    description:
      "Founder of ValidLeads.ai – AI-powered lead quality filter platform.",
  },
  {
    Icon: RxActivityLog,
    title: "Digital Marketing Strategy",
    description:
      "End-to-end digital marketing strategies to maximize ROI through content, paid ads, and optimization.",
  },
];

// Component
const Services = () => {
  return (
    <div className="w-full py-16 ">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-3xl font-bold mb-6 text-white"
        >
        
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-2xl mx-auto text-white/70 mb-12"
        >
    
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-white/10 p-6 rounded-xl shadow-md text-left border border-white/10 hover:border-accent transition-all"
            >
              <service.Icon className="text-4xl text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
