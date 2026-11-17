"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const links = [
    { href: "/", label: "FORSIDE" },
    { href: "/events", label: "EVENTS LISTS" },
    { href: "/eventpage", label: "EVENTS" },
    { href: "/booktable", label: "BOOK TABLE" },
    { href: "/contactus", label: "KONTAKT" },
  ];

  const pathname = usePathname();

  return (
    <div className=" full-bleed relative z-50">
      <header className="flex justify-between items-center">
        <Link href="/">
          <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} src="/assets/Logo.png" alt="Nigth Club logo" />
        </Link>
        <nav>
          <ul className="flex gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.li className="relative" key={link.href}>
                  <Link href={link.href}>
                    <div className="overflow-hidden h-6">
                      <motion.div whileHover={{ backgroundColor: "#00ff00" }}>
                        <span className="block">{link.label}</span>
                        <span className="block">{link.label}</span>
                      </motion.div>
                    </div>
                  </Link>
                  {isActive && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-(--accent1) to-transparent" layoutId="underline" />}
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
