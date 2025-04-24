import Link from "next/link";
import {
  RiInstagramLine,
  RiYoutubeLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiPinterestLine,
} from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/nitinngrover?igsh=MWsxMGU2MWdmbHhrNQ%3D%3D&utm_source=qr",
    Icon: RiInstagramLine,
  },
  {
    name: "Linkedin",
    link: "http://www.linkedin.com/in/nitingrover1616",
    Icon: FaLinkedinIn,
  },
  // Removed Github from the socialData array
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg pt-10">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Instagram" || social.name === "Linkedin"
              ? "hover:text-accent"
              : ""
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
