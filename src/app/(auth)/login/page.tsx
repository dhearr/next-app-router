import { Input } from "@nextui-org/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="bg-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#0a0a0a] rounded-lg shadow border border-[#444746] md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl text-[#ededed]">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <Input
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  radius="sm"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-[#ededed]"
                >
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-[#1f1f1f] sm:text-sm rounded-lg block w-full p-3 placeholder-[#ededed]/50"
                  required
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
