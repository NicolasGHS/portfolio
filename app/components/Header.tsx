import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex gap-2 items-center">
      <p className="font-bold text-2xl">Nicolas GHS</p>
      <Link href="/works">Work</Link>
    </div>
  );
};
