import { NextResponse, NextRequest } from "next/server";

const data = [
  {
    id: 1,
    name: "Sepatu Nike",
    price: 1500000,
    category: "Sepatu",
  },
  {
    id: 2,
    name: "Sepatu Adidas",
    price: 1700000,
    category: "Sepatu",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Product not found",
      data: {},
    });
  }
  return NextResponse.json({ status: 200, message: "Success", data });
}
