"use client";

import { Input } from "@nextui-org/input";
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = (e: any) => {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      }),
    });
  };

  return (
    <section className="bg-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#0a0a0a] rounded-lg shadow border border-[#444746] md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl text-[#ededed]">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleLogin(e)}
            >
              <div>
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  size="lg"
                  variant="underlined"
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Password"
                  name="password"
                  variant="underlined"
                  size="lg"
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
                Sign In
              </button>
              <p className="text-sm text-center font-light text-[#ededed]/50">
                Don’t have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-[#0070f3] hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
