import '@/styles/index.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

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
      <body className="flex flex-col min-h-screen bg-[#F2EDE7] text-[#2E2219] antialiased font-sans">
        <Navbar />
        <main className="flex-grow pt-14 sm:pt-16 lg:pt-24">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <FloatingWhatsApp phoneNumber="+15551234567" />
      </body>
    </html>
  );
}
