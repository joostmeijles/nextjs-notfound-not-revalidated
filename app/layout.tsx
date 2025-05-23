export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>ROOTLAYOUT</div>
        {children}
      </body>
    </html>
  );
}
