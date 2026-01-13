import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fee The Developer LLC - Production-Ready Software Engineering',
  description:
    'Fee The Developer LLC designs, builds, and deploys scalable software systems for startups, SMBs, and organizations that need senior-level engineering execution.',
  keywords:
    'software engineering, web development, startup engineering, managed hosting, veteran-owned',
  authors: [{ name: 'Fee The Developer LLC' }],
  openGraph: {
    title: 'Fee The Developer LLC',
    description: 'Production-Ready Software Engineering for Growing Businesses',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
