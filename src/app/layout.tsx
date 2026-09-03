import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { firm } from "@/lib/content";
import "./globals.css";

// Και οι δύο γραμματοσειρές φορτώνονται με το ελληνικό subset. Προσοχή σε
// μελλοντικές αλλαγές: πολλές δημοφιλείς γραμματοσειρές (Barlow, Montserrat,
// Cormorant Garamond, Rubik, Oswald) δεν έχουν καθόλου ελληνικούς χαρακτήρες.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["greek", "latin"],
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-condensed",
  subsets: ["greek", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const description =
  "Δικηγορικό γραφείο στο κέντρο της Αθήνας. Ολοκληρωμένες νομικές υπηρεσίες σε επιχειρήσεις και ιδιώτες, με έμφαση στο Αστικό και Εμπορικό Δίκαιο, τις σύνθετες δικαστικές διαφορές και τις νομικές γνωμοδοτήσεις.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sm-legal.gr"),
  title: {
    default: `${firm.name} — Δικηγορικό Γραφείο`,
    template: `%s — ${firm.name}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: firm.name,
    title: `${firm.name} — Δικηγορικό Γραφείο`,
    description,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body
        className={`${inter.variable} ${robotoCondensed.variable} antialiased`}
      >
        <a
          href="#main"
          className="bg-bronze sr-only px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100"
        >
          Μετάβαση στο περιεχόμενο
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
