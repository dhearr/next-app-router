import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="bg-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#0a0a0a] rounded-lg shadow border border-[#444746] md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl text-[#ededed]">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-[#ededed]"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="bg-[#1f1f1f] sm:text-sm rounded-lg block w-full p-3 placeholder-[#ededed]/50"
                  placeholder="example name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#ededed]"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#1f1f1f] sm:text-sm rounded-lg block w-full p-3 placeholder-[#ededed]/50"
                  placeholder="name@example.com"
                  required
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
