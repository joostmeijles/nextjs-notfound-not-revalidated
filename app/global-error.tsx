'use client';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {

  return (
    <html>
      <body>
        {error.digest}
      </body>
    </html>
  );
}
