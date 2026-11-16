import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="full-bleed bg-white text-black">
      <ul className="flex justify-between p-2">
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
  );
};

export default Navigation;
