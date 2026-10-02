export const metadata = {
  title: "Bostadsplattform",
  description: "Översikt, automationer och projektstyrning för bostadsutveckling",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
