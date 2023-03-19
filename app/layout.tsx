import './globals.css'

export const metadata = {
  title: "Levi's Site",
  description: 'My personal websites with my  blog posts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
