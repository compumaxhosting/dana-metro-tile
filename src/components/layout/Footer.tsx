import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-premium-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left */}
          <div className="flex flex-col items-start mb-8">
            <Link href="/">
              <Image src="/footer-logoo.png" alt="Tiles & Stones NJ" width={280} height={70} priority/>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-gray-300 leading-7">
              Tiles & Stones NJ — tiles, stones, and masonry crafted with precision and installed with enduring care across New Jersey.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:mx-auto">
            <h3 className="uppercase tracking-[0.35em] text-xs text-premium-beige mb-8">
              Navigate
            </h3>

            <ul className="space-y-4 text-gray-300">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-premium-beige transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase tracking-[0.35em] text-xs text-premium-beige mb-8">
              Contact
            </h3>

            <div className="space-y-5 text-gray-300">
              <a href="tel:+15512067097" className="block hover:text-premium-beige transition-colors">
                551 206 7097
              </a>

              <a href="mailto:info@tilesandstonesnj.com" className="block hover:text-premium-beige transition-colors">
                info@tilesandstonesnj.com
              </a>

              <p>Wayne, NJ · By appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] uppercase tracking-[0.35em] text-gray-500 text-center md:text-left">
            © 2026 Tiles & Stones NJ. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/tiles.stones.masonry.nj/"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61594003410457"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.tiktok.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#25F4EE] bg-black text-white shadow-[2px_2px_0_#FE2C55] transition-transform hover:scale-110"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;