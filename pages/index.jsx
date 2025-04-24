import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { RxRocket, RxPencil2, RxDesktop, RxReader } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from 'react';
import DOMPurify from 'dompurify';



import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const services = [
  {
    Icon: RxRocket,
    title: "Brand & Growth Strategy",
    description:
      "Tress Lounge Franchise Strategy – helped structure brand narrative and sales strategy for 75 franchise units at $600K CAD each.",
  },
  {
    Icon: RxPencil2,
    title: "Performance Marketing",
    description: "Lead generation strategy & automation for Tress Lounge.",
  },
  {
    Icon: RxDesktop,
    title: "Social & Content Strategy",
    description: "Built social content plan for ValidLeads.ai pre-launch.",
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
    Icon: RxRocket,
    title: "Digital Marketing Strategy",
    description:
      "End-to-end digital marketing strategies to maximize ROI through content, paid ads, and optimization.",
  },
];

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/Tress.jpg",
          link: "https://www.tresslounge.ca/",
        },
        {
          title: "title",
          path: "/Hoveworks.jpg",
          link: "https://www.hiveworkscomics.com/",
        },
        {
          title: "title",
          path: "/vaildleads.jpg",
          link: "http://Validleads.ai",
        },
        {
          title: "title",
          path: "/store.jpg",
          link: "https://www.maneathesalon.com/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/annie.jpg",
          link: "https://www.annielennox.com/",
        },
        {
          title: "title",
          path: "/Monogle.jpg",
          link: "https://monocle.com/",
        },
        {
          title: "title",
          path: "/Eager.jpg",
          link: "https://eagerdrinks.com/",
        },
        {
          title: "title",
          path: "/Peroni.jpg",
          link: "https://peroniitalia.com/",
        },
      ],
    },
  ],
};

const Home = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setForm((prevForm) => ({
      ...prevForm,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = form;

    if (!name || !email || !subject || !message) {
      alert("All fields are required.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://leadsai-1.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      alert("Thank you! Your message was sent.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Network or server error:", error.message || error);
      alert("Network error: " + (error.message || "Try again later."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary/60 relative overflow-auto">
      {/* Home Section */}
      <div className="w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center pt-28 md:pt-32 xl:pt-40 xl:text-left h-auto container mx-auto px-4 sm:px-6">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" pt-8 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mt-5"
          >
            Crafting Growth-Centric <br /> Digital Journeys for Brands
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm sm:text-base md:text-lg max-w-md md:max-w-xl mx-auto xl:mx-0 mt-4 mb-8 xl:mb-16 pt-8"
          >
            With extensive experience in digital marketing, I have successfully
            managed and executed a wide range of campaigns across various
            digital platforms. My expertise includes developing data-driven
            strategies, optimizing websites for search engines (SEO), creating
            compelling content, and utilizing social media platforms to enhance
            brand visibility and engagement.
          </motion.p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="w-full py-16 bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl font-bold mb-6"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-lg max-w-3xl mx-auto"
          >
            With a strong foundation in digital marketing, I have helped various brands
            grow their online presence through strategic and result-driven campaigns.
            My expertise includes SEO, social media marketing, content creation, and paid advertising.
            I specialize in understanding brand goals and converting them into impactful digital strategies
            that drive traffic, engagement, and revenue. Whether it’s optimizing websites for better rankings,
            creating compelling content, or running high-performing ad campaigns — I aim to deliver measurable results.
          </motion.p>
        </div>
      </div>

      {/* My Services Section */}
      <div className="w-full py-16 bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl font-bold mb-6"
          >
            My Services
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-2xl mx-auto text-white/70 mb-12"
          >
            Here’s how I help businesses scale using advanced digital marketing strategies.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      {/* My Work Section */}
      <div className="w-full py-16bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl font-bold mb-6 pt-6"
          >
            My Work
          </motion.h2>

          {/* WorkSlider Component */}
          <Swiper
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="h-[280px] sm:h-[480px]"
          >
            {workSlides.slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  {slide.images.map((image, imageI) => (
                    <div
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                      key={imageI}
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image
                          src={image.path}
                          alt={image.title}
                          width={500}
                          height={300}
                        />

                        {/* overlay gradient */}
                        <div
                          className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                          aria-hidden
                        />

                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-700 text-center text-white p-4">
                          <h3 className="text-xl font-semibold">{image.title}</h3>
                          <Link
                            href={image.link}
                            target="_blank"
                            className="text-accent text-base font-medium flex items-center justify-center"
                          >
                            View Project
                            <BsArrowRight className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="h-full bg-primary/30">
      <div className="container mx-auto py-16 sm:py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] mx-4 sm:mx-auto">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 text-3xl sm:text-4xl"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            autoComplete="off"
          >
            <div className="flex flex-col sm:flex-row sm:gap-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="input mb-4 sm:mb-0 w-full sm:w-[48%]"
                disabled={loading}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                className="input w-full sm:w-[48%]"
                disabled={loading}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="input w-full"
              disabled={loading}
              required
            />
            <textarea
              name="message"
              placeholder="Message..."
              value={form.message}
              onChange={handleChange}
              className="textarea w-full"
              disabled={loading}
              required
              rows={4}
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative w-full sm:w-auto"
              disabled={loading}
            >
              <span
                className={`transition-all duration-500 ${
                  loading
                    ? "opacity-0 -translate-y-full"
                    : "group-hover:-translate-y-[120%] group-hover:opacity-0"
                }`}
              >
                {loading ? "Sending..." : "Let's talk"}
              </span>
              <BsArrowRight
                className={`absolute text-[22px] transition-all duration-300 ${
                  loading
                    ? "opacity-0"
                    : "group-hover:opacity-100 group-hover:translate-y-0 -translate-y-full opacity-0"
                }`}
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
