import {
  FiPhone,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
} from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="relative z-50 hidden w-full border-b border-white/10 bg-premium-black lg:block">
      <div className="flex h-8 w-full items-center justify-between px-6 xl:px-10 2xl:px-14">
        {/* Left */}
        <div className="flex items-center gap-8 py-2">
          <a
            href="tel:+15512067097"
            className="flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-[#B9B0A6] transition-colors hover:text-white font-sans"
          >
            <FiPhone size={12} />
            <span>551 206 7097</span>
          </a>

          <div className="flex items-center gap-4 text-[#B9B0A6]">
            <a href="#" className="hover:text-white transition-colors">
              <FiInstagram size={14} />
            </a>

            <a href="#" className="hover:text-white transition-colors">
              <FiFacebook size={14} />
            </a>

            <a href="#" className="hover:text-white transition-colors">
              <FiLinkedin size={14} />
            </a>
          </div>
        </div>

        {/* Right */}
        <p className="ml-auto text-[11px] uppercase tracking-[0.35em] text-[#B9B0A6] font-sans">
          Wayne, New Jersey
        </p>
      </div>
    </div>
  );
};

export default Topbar;