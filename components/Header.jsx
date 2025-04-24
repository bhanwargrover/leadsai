import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-6 lg:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <h1 className="text-4xl sm:text-3xl font-semibold text-center lg:text-left">
              Nitin <span className="text-accent">Grover</span>
            </h1>
          </Link>

          {/* socials */}
          <div className="flex justify-center lg:justify-end w-full">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
