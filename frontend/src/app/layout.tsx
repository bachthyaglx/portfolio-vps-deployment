// src/app/layout.tsx
import './globals.css';
import NavBar from '../components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ApolloWrapper from '../lib/ApolloWrapper';
import PrefetchQueries from '@/lib/PrefetchQueries';

export const metadata = {
  title: 'Porfolio',
  description: 'My porfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="gradient-bg text-white font-sans">
        <ApolloWrapper>
          <PrefetchQueries /> {/* Initially fetch from Prefetch cache, */}
          <NavBar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
