import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen m-0 p-0">
        <div className="flex h-screen">
          <aside className="w-20 md:w-60 bg-slate-200">
            <Sidebar />
          </aside>
          <main className="flex-1 p-6 bg-slate-50">{children}</main>
        </div>
      </body>
    </html>
  );
}
