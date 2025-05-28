export const dynamic = 'force-static';

export default async function Page() {
  const date = Date.now();
  const id = date % 500;
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
    next: {
      tags: ['example-data'], // Attach the revalidate tag
      revalidate: 10
    },
  });

  const data = await res.json();

  return (
    <html lang="en">
      <body>
        <div>NOTFOUND: {date} - {id} - {data?.name}</div>
      </body>
    </html>
  );
}