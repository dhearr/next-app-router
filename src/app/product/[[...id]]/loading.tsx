import { Card, Skeleton } from "@nextui-org/react";

async function getProducts() {
  // const res = await fetch("https://fakestoreapi.com/products", {
  //   cache: "force-cache",
  // });
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Loading() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-4 gap-5 my-10 mx-16">
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <Card
            key={product.id}
            className="w-[100%] h-[518px] space-y-5 p-4 bg-[#0a0a0a] border border-[#444746]"
            radius="md"
          >
            <Skeleton className="">
              <div className="h-[360px] bg-default-300"></div>
            </Skeleton>
            <div className="space-y-6">
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-4 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="flex items-center justify-between">
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-4 w-2/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-1/5 rounded-lg">
                  <div className="h-4 w-1/5 rounded-lg bg-default-200"></div>
                </Skeleton>
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
}
