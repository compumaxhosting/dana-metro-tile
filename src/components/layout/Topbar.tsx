import {
  FiPhone,
  FiInstagram,
  FiFacebook,
  FiMail
} from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
const Topbar = () => {
  return (
    <div className="relative z-50 w-full border-b border-white/10 bg-premium-black">
      {/* Responsive layout container */}
      <div className="flex h-12 lg:h-8 w-full items-center justify-between px-4 sm:px-6 xl:px-10 2xl:px-14">

        {/* --- DESKTOP VIEW (lg and above): Phone & Socials on Left --- */}
        <div className="hidden lg:flex items-center gap-8 py-2">
          <a
            href="tel:+15512067097"
            className="flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-theme-cream transition-colors hover:text-theme-cream font-sans"
          >
            <FiPhone size={12} />
            <span>551 206 7097</span>
          </a>
          <div className="hidden lg:flex items-center gap-8 py-2">
            <a
              href="mailto:info@tilesandstonesnj.com"
              className="flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-theme-cream transition-colors hover:text-theme-cream font-sans"
            >
              <FiMail size={12} />
              <span>info@tilesandstonesnj.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-theme-cream">
            <a href="https://www.instagram.com/tiles.stones.masonry.nj/" className="flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1.5 text-white transition-transform hover:scale-110">
              <FiInstagram size={14} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61594003410457" className="flex items-center justify-center rounded-full bg-[#1877F2] p-1.5 text-white transition-transform hover:scale-110">
              <FiFacebook size={14} />
            </a>
            <a href="https://www.tiktok.com" className="flex items-center justify-center rounded-full border-2 border-[#25F4EE] bg-black p-1.5 text-white shadow-[2px_2px_0_#FE2C55] transition-transform hover:scale-110">
              <FaTiktok size={14} />
            </a>
          </div>
        </div>

        {/* --- TABLET/MID VIEW (md to lg): Phone on Left, Socials on Right --- */}
        <div className="hidden md:flex lg:hidden items-center justify-between w-full py-2">
          <a
            href="tel:+15512067097"
            className="flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-theme-cream transition-colors hover:text-theme-cream font-sans"
          >
            <FiPhone size={12} />
            <span>551 206 7097</span>
          </a>

          <div className="flex items-center gap-4 text-theme-cream">
            <a href="https://www.instagram.com/tiles.stones.masonry.nj/" className="flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1.5 text-white transition-transform hover:scale-110">
              <FiInstagram size={14} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61594003410457" className="flex items-center justify-center rounded-full bg-[#1877F2] p-1.5 text-white transition-transform hover:scale-110">
              <FiFacebook size={14} />
            </a>
            <a href="https://www.tiktok.com" className="flex items-center justify-center rounded-full border-2 border-[#25F4EE] bg-black p-1.5 text-white shadow-[2px_2px_0_#FE2C55] transition-transform hover:scale-110">
              <FaTiktok size={14} />
            </a>
          </div>
        </div>

        {/* --- MOBILE VIEW (below 768px): Social Icons Centered --- */}
        <div className="flex md:hidden items-center justify-center gap-6 w-full text-theme-cream py-2">
          <a href="https://www.instagram.com/tiles.stones.masonry.nj/" className="flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 text-white transition-transform hover:scale-110">
            <FiInstagram size={22} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61594003410457" className="flex items-center justify-center rounded-full bg-[#1877F2] p-2 text-white transition-transform hover:scale-110">
            <FiFacebook size={22} />
          </a>
          <a href="https://www.tiktok.com" className="flex items-center justify-center rounded-full border-2 border-[#25F4EE] bg-black p-2 text-white shadow-[2px_2px_0_#FE2C55] transition-transform hover:scale-110">
            <FaTiktok size={22} />
          </a>
        </div>

        {/* Right: Location (Only on large screens where space permits) */}
        <p className="hidden lg:block ml-auto text-[11px] uppercase tracking-[0.35em] text-theme-cream font-sans">
          Wayne, New Jersey
        </p>
      </div>
    </div>
  );
};

export default Topbar;