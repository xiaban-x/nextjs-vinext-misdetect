import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Next.js with a leftover vinext dependency",
  description: "Reproduces a Next.js project that still builds with next build --webpack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
