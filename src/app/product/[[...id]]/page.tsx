export default function ProductPage({ params }: { params: { id: string[] } }) {
  return (
    <div>
      <h1>{params.id ? "Detail Product Page" : "Product Page"}</h1>
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
