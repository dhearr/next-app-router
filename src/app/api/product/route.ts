import { NextResponse, NextRequest } from "next/server";

const data = [
  {
    id: 1,
    title: "NIke Air Force 1 '07 Essential",
    price: 1729,
    category: "Sepatu",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/685dd173-195c-4b28-aaf9-c91fd61dfd4c/air-force-1-07-essential-shoes-Dsb0fT.png",
  },
  {
    id: 2,
    title: "Nike Dunk Low",
    price: 1549,
    category: "Sepatu",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-shoes-r8QXCd.png",
  },
  {
    id: 3,
    title: "Nike Air Max 90 LV8",
    price: 2199,
    category: "Sepatu",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7699cc0-7ddb-4fc7-ba9a-f587c0684a1c/air-max-90-lv8-shoes-5KhTdP.png",
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
