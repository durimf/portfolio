import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <div className="content">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
