export default function Layout({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <div className="p-16">
      <div>{children}</div>
      <div className="mt-5 flex justify-center items-center space-x-5">
        {products}
        {analytics}
      </div>
      <div className="mt-5">{payments}</div>
    </div>
  );
}
