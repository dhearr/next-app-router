export const getProducts = async (url: string) => {
  // const res = await fetch("https://fakestoreapi.com/products", {
  //   cache: "no-store",
  // });
  const res = await fetch(url, {
    // cache: "force-cache",
    cache: "no-store",
    // next: {
    // revalidate: 20,
    //   tags: ["products"],
    // },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
