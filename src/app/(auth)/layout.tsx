import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="sticky bg-black top-0 flex py-4 px-16 items-center justify-between border-b-2 border-[#333333] back">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold mr-12 text-[#ededed]">
              Navbar<span className="text-sm">.Js</span>
            </h1>
          </Link>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
}
