import { getProducts } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = { params: { id: string[] } };

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getProducts("http://localhost:3000/api/product");
  // console.log(products);

  return (
    <div className="grid grid-cols-4 gap-5 my-10 mx-16">
      {/* <h1>{params.id ? "Detail Product Page" : "Product Page"}</h1> */}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <div
            key={product.id}
            className="w-full max-w-sm bg-[#0a0a0a] border border-[#444746] rounded-lg shadow"
          >
            <Image
              className="p-5 rounded-t-lg object-cover w-full h-96"
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              loading="lazy"
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-white truncate mb-2">
                {product.title}
              </h5>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-white">
                  {product.price.toLocaleString("usd", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
                <Link href={`/product/detail/${product.id}`}>
                  <button
                    type="button"
                    className="bg-[#ededed] text-[#0a0a0a] hover:bg-[#d0d0d0] py-1 px-5 rounded-md text-md font-medium transition-all"
                  >
                    Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      {params.id && (
        <>
          <h2>Category : {params.id[0]}</h2>
          <h2>Gender : {params.id[1]}</h2>
          <h2>Id : {params.id[2]}</h2>
        </>
      )}
    </div>
  );
}
