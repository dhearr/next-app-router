import { getProducts } from "@/services/products";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getProducts(
    "http://localhost:3000/api/product/?id=" + params.id
  );

  return (
    <div className="container mx-auto my-10">
      <Card isFooterBlurred className="w-1/2 h-[450px] mx-auto">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">
            {product.data.category}
          </p>
          <h4 className="text-black/90 font-medium text-xl">
            {product.data.title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={product.data.image}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <h1 className="text-3xl text-white">
                {product.data.price.toLocaleString("usd", {
                  style: "currency",
                  currency: "USD",
                })}
              </h1>
            </div>
          </div>
          <Button radius="full" size="sm">
            Buy
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
