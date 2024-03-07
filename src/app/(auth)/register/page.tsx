"use client";

import Link from "next/link";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    if (res.status === 200) {
      e.target.reset();
      setIsLoading(false);
      push("/login");
    } else {
      const data = await res.json();
      setError(data.message);
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/">
          <h1 className="text-3xl font-bold mb-5 text-[#ededed]">
            Company<span className="text-sm">.Js</span>
          </h1>
        </Link>
        {error !== "" && <h1 className="text-red-500">{error}</h1>}
        <div className="w-full bg-[#0a0a0a] rounded-lg shadow border border-[#444746] md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl text-[#ededed]">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleRegister(e)}
            >
              <div>
                <Input
                  type="text"
                  label="Fullname"
                  name="fullname"
                  size="sm"
                  variant="underlined"
                  isRequired
                />
              </div>
              <div>
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  size="sm"
                  variant="underlined"
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Password"
                  name="password"
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
