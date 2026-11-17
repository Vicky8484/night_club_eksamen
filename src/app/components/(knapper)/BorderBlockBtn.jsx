import Link from "next/link";

const BorderBlockBtn = ({link, buttontxt}) => {
  return (
    <button className="border-y-2 p-2 px-4">
      <Link href={link}>{buttontxt}</Link>
    </button>
  );
};

export default BorderBlockBtn;
