import '@/styles/index.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Alexander Sterling | Fine Art & Portrait Photography',
  description: 'Excellence in fine art and portrait photography. Capturing timeless elegance and genuine human emotion.',
  keywords: ['photography', 'fine art', 'portraits', 'weddings', 'Alexander Sterling', 'portfolio'],
  authors: [{ name: 'Alexander Sterling' }],
  openGraph: {
    title: 'Alexander Sterling | Fine Art & Portrait Photography',
    description: 'Excellence in fine art and portrait photography.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 antialiased font-sans">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
