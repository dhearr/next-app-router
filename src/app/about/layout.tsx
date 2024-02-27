export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const listItem = [
    "list item 1",
    "list item 2",
    "list item 3",
    "list item 4",
    "list item 5",
    "list item 6",
    "list item 7",
    "list item 8",
    "list item 9",
    "list item 10",
  ];
  return (
    <>
      <nav className="fixed overflow-y-scroll z-10 right-0 top-[75px] h-screen w-[400px] border-l-2 border-[#333333]">
        <div className="p-5">
          <ul className="space-y-24">
            {listItem.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ul>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
}
