'use client';

import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

function NotFoundPage() {
  return (
    <div className="container mx-auto px-6 py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <SectionTitle title="404 - Page Not Found" />
      <p className="text-lg text-stone-600 mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <Link 
        href="/" 
        className="px-6 py-3 rounded-md bg-stone-900 text-amber-300 border border-amber-300/40 hover:bg-stone-800 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;