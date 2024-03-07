"use client";

import Link from "next/link";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="bg-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/">
          <h1 className="text-3xl font-bold mb-5 text-[#ededed]">
            Company<span className="text-sm">.Js</span>
          </h1>
        </Link>
        <div className="w-full bg-[#0a0a0a] rounded-lg shadow border border-[#444746] md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl text-[#ededed]">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <Input
                  type="text"
                  label="Fullname"
                  size="sm"
                  variant="underlined"
                  isRequired
                />
              </div>
              <div>
                <Input
                  type="email"
                  label="Email"
                  size="sm"
                  variant="underlined"
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Password"
                  variant="underlined"
                  size="sm"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <FaEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  isRequired
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#ededed] text-[#0a0a0a] hover:bg-[#d0d0d0] py-2.5 px-5 rounded-md text-md font-medium transition-all"
              >
                Sing Up
              </button>
              <p className="text-sm text-center font-light text-[#ededed]/50">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-[#0070f3] hover:underline"
                >
                  Sign in here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
