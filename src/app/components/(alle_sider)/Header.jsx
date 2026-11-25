"use client";
import {motion} from "motion/react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = () => {
  const links = [
    {href: "/", label: "HOME"},
    {href: "/events", label: "EVENTS"},
    {href: "/booktable", label: "BOOK TABLE"},
    {href: "/contactus", label: "CONTACT US"},
  ];

  const pathname = usePathname();

  return (
    <div className="sticky top-0 full-bleed z-50 border-y-2 border-(--accent1) bg-background">
      <span className=" full-bleed absolute top-0 left-0 w-10 h-10 bg-(--accent1) [clip-path:polygon(0_0,100%_0,0_100%)]" />
      <span className=" full-bleed absolute bottom-0 right-0 w-10 h-10 bg-(--accent1) [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

      <header className="flex gap-4 justify-between items-center my-5">
        <Link href="/">
          <motion.img
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            src="/assets/Logo.png"
            alt="Nigth Club logo"
          />
        </Link>
        <nav>
          <ul className="flex gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.li
                  className="relative"
                  key={link.href}
                  initial="rest"
                  whileHover="hover"
                >
                  <Link
                    href={link.href}
                    className={isActive ? "text-(--accent1)" : "text-white"}
                  >
                    <div className="overflow-hidden h-[1lh]">
                      <motion.div
                        variants={{rest: {y: 0}, hover: {y: "-50%"}}}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                      >
                        <span className="block text-white">{link.label}</span>
                        <span className="block text-(--accent1)">
                          {link.label}
                        </span>
                      </motion.div>
                    </div>
                  </Link>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-(--accent1) to-transparent"
                      layoutId="underline"
                    />
                  )}
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
