import '@/styles/index.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export const metadata = {
  title: 'Kasun Senanayake | Fine Art & Wedding Photography Sri Lanka',
  description: 'Premier fine art wedding and portrait photography in Sri Lanka by Kasun Senanayake. Capturing timeless Poruwa ceremonies, church weddings, and destination celebrations.',
  keywords: ['photography', 'wedding photography sri lanka', 'poruwa ceremony', 'colombo photographer', 'galle destination wedding', 'Kasun Senanayake', 'portfolio'],
  authors: [{ name: 'Kasun Senanayake' }],
  openGraph: {
    title: 'Kasun Senanayake | Fine Art & Wedding Photography Sri Lanka',
    description: 'Premier fine art wedding and portrait photography in Sri Lanka.',
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
        <FloatingWhatsApp phoneNumber="+94771234567" />
      </body>
    </html>
  );
}
