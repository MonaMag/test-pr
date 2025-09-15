import "./globals.css";
import Sidebar from '@/components/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="min-h-screen flex">
          <aside className="w-20 md:w-64 bg-gray-100"><Sidebar /></aside>

          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
