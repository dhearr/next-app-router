"use client";

export default function AdminProductPage() {
  const revalidate = async () => {
    await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=12345",
      {
        method: "POST",
      }
    );
  };

  return (
    <div className="w-3/6 h-96 bg-[#0a0a0a] border border-[#444746] rounded-[12px] flex justify-center items-center">
      <button
        className="bg-[#ededed] text-[#0a0a0a] hover:bg-[#d0d0d0] py-1 px-5 rounded-md text-md font-medium transition-all"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
