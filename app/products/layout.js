import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Influxify",
  description: "The ultimate 2-in-One mobile store.", //primerno
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* children e page.jsx, a okolo tqh v layout ima filri(categories, brands, price...), koito sa tam vinagi. Shopt Items sa componenti, za koito s .map se izvlicha informaciqta */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
