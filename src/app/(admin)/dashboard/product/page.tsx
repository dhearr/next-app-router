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
    <div>
      <button
        className="p-5 m-5 bg-white text-black"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
