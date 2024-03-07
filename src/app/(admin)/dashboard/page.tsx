"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();

  // console.log(session);
  // console.log(status);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else {
      if (session !== undefined && session?.user.role !== "admin") {
        router.push("/");
      }
    }
  }, [router, session, session?.user.role, status]);

  return (
    <div className="w-full h-96 bg-[#0a0a0a] border border-[#444746] rounded-[12px] flex justify-center items-center">
      <h1>Dashboard Page</h1>
    </div>
  );
}
