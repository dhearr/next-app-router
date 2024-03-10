"use client";

import { Input } from "@nextui-org/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function LoginPage({ searchParams }: any) {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: searchParams.callbackUrl,
      });
      if (!res?.error) {
        e.target.reset();
        setIsLoading(false);
        push(searchParams.callbackUrl || "/");
      } else {
        if (res.status === 401) {
          e.target.reset();
          setIsLoading(false);
          return setError("Email or password is incorrect");
        }
      }
    } catch (error) {
      console.log(error);
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
                  size="sm"
                  variant="underlined"
                  isInvalid={error !== ""}
                  errorMessage={error !== "" ? error : undefined}
                  ref={inputRef}
                  isRequired
                />
              </div>
              <div>
                <Input
                  label="Password"
                  name="password"
                  variant="underlined"
                  size="sm"
                  isInvalid={error !== ""}
                  errorMessage={error !== "" ? error : undefined}
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
                disabled={isLoading}
                type="submit"
                className="w-full bg-green-700 text-[#ededed] hover:bg-green-600 py-2.5 px-5 rounded-md text-md font-medium transition-all"
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Sign In"
                )}
              </button>
              <hr />
              <button
                type="button"
                className="w-full flex items-center justify-center bg-blue-700 text-[#ededed] hover:bg-blue-600 py-2.5 px-5 rounded-md text-md font-medium transition-all"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: searchParams.callbackUrl,
                    redirect: false,
                  })
                }
              >
                <span className="inline-flex">
                  <Image
                    src="/img/google.png"
                    alt="google"
                    height={200}
                    width={200}
                    className="h-7 w-7 mr-2"
                  />
                </span>
                Sign in with Google
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
