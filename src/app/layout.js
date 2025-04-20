// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Imaginary Friends | Your Spiritual AI Companions",
  description:
    "Connect with Bobby, Julie, and Simone - your digital companions for spiritual growth and mindfulness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 font-[Poppins]">
        {children}
      </body>
    </html>
  );
}
