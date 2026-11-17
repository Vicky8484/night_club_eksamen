import Link from "next/link";

const GradientBtn = ({link, buttontxt}) => {
  return (
    <button className="bg-(image:--gradient) p-2 px-4 border-2">
      <Link href={link}>{buttontxt}</Link>
    </button>
  );
};

export default GradientBtn;
