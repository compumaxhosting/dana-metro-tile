import Image from "next/image";
import Link from "next/link";
import {FaFacebookF, FaInstagram, FaLinkedinIn,} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-premium-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left */}
          <div className="flex flex-col items-start mb-8">
            <Link href="/">
              <Image src="/footer-logo.png" alt="Dan Kush Metro Tile & Stone" width={220} height={70} priority />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-gray-300 leading-7">
              Metro Tile & Stone — tiles, stones, and masonry crafted with precision and installed with enduring care across New Jersey.
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

              <a href="mailto:info@metrotilesandstones.com" className="block hover:text-premium-beige transition-colors">
                info@metrotilesandstones.com
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
            © 2026 Dan Kush Metro Group Construction. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-lg text-gray-400">
            <a
              href="#"
              className="hover:text-premium-beige transition-colors"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-premium-beige transition-colors"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="hover:text-premium-beige transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;