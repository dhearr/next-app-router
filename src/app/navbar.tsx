import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex py-5 px-16 items-center border-b-2 border-[#333333] back">
      <h1 className="text-3xl font-bold mr-12">
        Navbar<span className="text-sm">.Js</span>
      </h1>
      <ul className="flex gap-10">
        <Link href="/">
          <li className="font-normal text-[#888888] hover:text-white transition-all">
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className="font-normal text-[#888888] hover:text-white transition-all">
            About
          </li>
        </Link>
        <Link href="/about/profile">
          <li className="font-normal text-[#888888] hover:text-white transition-all">
            Profile
          </li>
        </Link>
      </ul>
    </nav>
  );
}
