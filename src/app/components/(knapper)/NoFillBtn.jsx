import Link from "next/link";

const NoFillBtn = ({link, buttontxt}) => {
  return (
    <button className="border-2 p-2 px-4">
      <Link href={link}>{buttontxt}</Link>
    </button>
  );
};

export default NoFillBtn;
