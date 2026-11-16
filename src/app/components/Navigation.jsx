import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-white text-black flex justify-between">
      <ul>
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
