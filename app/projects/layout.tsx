
export const metadata = {
  title: "Levi Opungas's Personal Site",
  description: "My personal Projects",
  icons: {
    icon: "/circle.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
