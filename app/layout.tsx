import type { Metadata } from "next";
import localFont from "next/font/local";
import { Button, ConfigProvider, Space } from "antd";
import "./globals.css";

const roboto = localFont({
  src: [
    { path: "./fonts/Roboto-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/Roboto-BlackItalic.ttf", weight: "900", style: "italic" },
    { path: "./fonts/Roboto-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Roboto-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./fonts/Roboto-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Roboto-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Roboto-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/Roboto-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Roboto-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./fonts/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Roboto-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/Roboto-ThinItalic.ttf", weight: "100", style: "italic" },
  ],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "IOT Automation",
  description:
    "Transform your building’s energy efficiency and automation with cutting-edge IoT solutions. Discover smart energy management, real-time monitoring, and automation technologies that optimize comfort, reduce costs, and promote sustainable energy use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} min-h-screen mb-0 p-0 overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
