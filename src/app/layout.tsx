import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/layouts/Header/Header";
import Sidebar from "@/app/layouts/Sidebar/Sidebar";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />

                <div className="wrap-layout">
                    <Sidebar />
                    <div>{children}</div>
                </div>
            </body>
        </html>
    );
}
