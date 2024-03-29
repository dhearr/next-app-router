"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navigationbar() {
  const pathname = usePathname();
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();

  return (
    <nav className="sticky z-10 bg-black/70 backdrop-blur-lg top-0 flex py-4 px-16 items-center justify-between border-b-2 border-[#333333] back">
      <div className="flex items-center h-100">
        <Link href="/">
          <h1 className="text-3xl font-bold mr-12 text-[#ededed]">
            Company<span className="text-sm">.Js</span>
          </h1>
        </Link>
        <ul className="flex gap-10">
          <Link href="/">
            <li
              className={`font-medium text-md ${
                pathname === "/"
                  ? "text-[#0070f3] font-semibold"
                  : "text-[#888888] hover:text-[#ededed]"
              } transition-all`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`font-medium text-md ${
                pathname === "/about"
                  ? "text-[#0070f3] font-semibold"
                  : "text-[#888888] hover:text-[#ededed]"
              } transition-all`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`font-medium text-md ${
                pathname === "/about/profile"
                  ? "text-[#0070f3] font-semibold"
                  : "text-[#888888] hover:text-[#ededed]"
              } transition-all`}
            >
              Profile
            </li>
          </Link>
          <Link href="/product">
            <li
              className={`font-medium text-md ${
                pathname === "/product"
                  ? "text-[#0070f3] font-semibold"
                  : "text-[#888888] hover:text-[#ededed]"
              } transition-all`}
            >
              Product
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-4">
        {status === "authenticated" ? (
          <div className="flex items-center">
            <h4 className="text-white mr-3">{session?.user?.fullname}</h4>
            <button
              type="button"
              className="bg-[#ededed] text-[#0a0a0a] hover:bg-[#d0d0d0] py-1 px-5 rounded-md text-md font-medium transition-all"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              className="bg-[#0a0a0a] hover:bg-[#1f1f1f] py-1 px-5 rounded-md text-md text-[#ededed] font-medium border border-[#444746] transition-all"
              onClick={() => router.push("/register")}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="bg-[#ededed] text-[#0a0a0a] hover:bg-[#d0d0d0] py-1 px-5 rounded-md text-md font-medium transition-all"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
