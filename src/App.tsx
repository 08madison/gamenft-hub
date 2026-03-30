import { useEffect } from 'react';
import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import TrendingNFTs from '@/sections/TrendingNFTs';
import TopCreators from '@/sections/TopCreators';
import CommunityVoice from '@/sections/CommunityVoice';
import CTASection from '@/sections/CTASection';
import Footer from '@/sections/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <TrendingNFTs />
        <TopCreators />
        <CommunityVoice />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
