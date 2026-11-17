import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" full-bleed">
      <Link href="/">
        <img src="/assets/Logo.png" alt="Nigth Club logo" />
      </Link>
      <nav className="">
        <ul className="">
          <li>
            <Link href="/">Forside</Link>
          </li>
          <li>
            <Link href="/events">Events List</Link>
          </li>
          <li>
            <Link href="/eventpage">Event</Link>
          </li>
          <li>
            <Link href="/booktable">Book Table</Link>
          </li>
          <li>
            <Link href="/contactus">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
