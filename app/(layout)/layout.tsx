export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const date = Date.now();
  const id = date % 500;
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
    next: {
      tags: ['example-data'], // Attach the revalidate tag
    },
  });

  const data = await res.json();

  return (
    <div>
        <div>NESTED LAYOUT: {date} - {id} - {data?.name}</div>
        {children}
    </div>
  );
}
