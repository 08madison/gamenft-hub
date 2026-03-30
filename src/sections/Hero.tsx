import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { stats } from '@/data';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from('.hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'expo.out',
        delay: 0.2,
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
        delay: 0.6,
      });

      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
        delay: 0.8,
      });

      gsap.from('.hero-card', {
        rotateX: 90,
        opacity: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.4,
      });

      gsap.from('.stat-item', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'expo.out',
        delay: 1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Mouse tracking for card tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / 25;
      const y = (e.clientY - centerY) / 25;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-green/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-dark/10 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block text-white">Discover &</span>
              <span className="block gradient-text">Collect</span>
              <span className="block text-white">Extraordinary</span>
              <span className="block text-neon-green neon-text-green">Gaming NFTs</span>
            </h1>

            <p className="hero-subtitle text-lg sm:text-xl text-gray-400 max-w-xl">
              The world's premier marketplace for in-game assets, characters, and virtual land. 
              Own a piece of the metaverse.
            </p>

            <div className="hero-cta flex flex-wrap gap-4">
              <Button
                size="lg"
                className="btn-primary group"
              >
                Explore Marketplace
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Create NFT
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              ref={cardRef}
              className="hero-card relative"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple/50 via-neon-green/30 to-purple/50 rounded-2xl blur-xl opacity-50 animate-pulse-glow" />
              
              {/* Card */}
              <div className="relative glass-strong rounded-2xl overflow-hidden max-w-sm">
                <div className="relative aspect-[4/5]">
                  <img
                    src="/hero-warrior.jpg"
                    alt="Cyber Warrior NFT"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Card Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                  
                  {/* Card Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-neon-green/20 text-neon-green text-xs rounded-full">
                        Featured
                      </span>
                      <span className="px-2 py-1 bg-purple/20 text-purple-light text-xs rounded-full">
                        Legendary
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Cyber Warrior</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src="/creator-alex.jpg"
                          alt="Creator"
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-400">Alex Chen</span>
                      </div>
                      <div className="text-neon-green font-semibold">2.5 ETH</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass px-3 py-2 rounded-lg animate-float">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-neon-green" />
                  <span className="text-sm text-white">+24.5%</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-light" />
                  <span className="text-sm text-white">1.2k views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
