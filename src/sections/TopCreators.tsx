import { useEffect, useRef, useState } from 'react';
import { Verified, TrendingUp } from 'lucide-react';
import { creators, nfts } from '@/data';
import type { NFT } from '@/types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TopCreators() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [featuredCreator, setFeaturedCreator] = useState(creators[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.creators-title', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.creator-avatar', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.creators-grid',
          start: 'top 80%',
        },
      });

      gsap.from('.featured-creator', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.featured-creator',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCreatorClick = (creator: typeof creators[0]) => {
    if (isAnimating || creator.id === featuredCreator.id) return;
    
    setIsAnimating(true);
    
    // Animate out
    gsap.to('.featured-creator', {
      opacity: 0,
      x: -30,
      duration: 0.3,
      onComplete: () => {
        setFeaturedCreator(creator);
        // Animate in
        gsap.fromTo('.featured-creator', 
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.3, onComplete: () => setIsAnimating(false) }
        );
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      id="creators"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 creators-title">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Top <span className="gradient-text">Creators</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the visionary artists shaping the future of gaming NFTs. 
            Each creator brings unique style and innovation to the metaverse.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Featured Creator */}
          <div className="featured-creator">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple/30 to-neon-green/20 rounded-3xl blur-xl" />
              
              <div className="relative glass-strong rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-purple/50">
                      <img
                        src={featuredCreator.avatar}
                        alt={featuredCreator.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
                      <Verified className="w-5 h-5 text-dark" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {featuredCreator.name}
                    </h3>
                    <p className="text-gray-400 mb-4">Digital Artist & Game Designer</p>
                    
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                      <div className="glass px-4 py-2 rounded-lg">
                        <div className="text-lg font-bold text-white">{featuredCreator.sales?.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Total Sales</div>
                      </div>
                      <div className="glass px-4 py-2 rounded-lg">
                        <div className="text-lg font-bold text-neon-green">2.5K</div>
                        <div className="text-xs text-gray-500">Followers</div>
                      </div>
                      <div className="glass px-4 py-2 rounded-lg">
                        <div className="text-lg font-bold text-purple-light">4.9</div>
                        <div className="text-xs text-gray-500">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Works Preview */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">Recent Works</span>
                    <span className="text-sm text-neon-green flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      +12% this week
                    </span>
                  </div>
                  <div className="flex gap-3">
                    {nfts.filter((n: NFT) => n.creator.id === featuredCreator.id).slice(0, 3).map((nft: NFT, i: number) => (
                      <div key={i} className="w-20 h-20 rounded-lg overflow-hidden">
                        <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Creators Grid */}
          <div className="creators-grid">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {creators.map((creator) => (
                <button
                  key={creator.id}
                  onClick={() => handleCreatorClick(creator)}
                  className={`creator-avatar group relative transition-all duration-300 ${
                    featuredCreator.id === creator.id ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div
                    className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                      featuredCreator.id === creator.id
                        ? 'ring-4 ring-neon-green shadow-neon-green'
                        : 'ring-2 ring-white/10 group-hover:ring-purple/50'
                    }`}
                  >
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs text-white font-medium text-center px-2">
                        {creator.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  
                  {creator.verified && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-neon-green rounded-full flex items-center justify-center">
                      <Verified className="w-3 h-3 text-dark" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="mt-8 glass rounded-xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">5.2K</div>
                  <div className="text-xs text-gray-500">Total Creators</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neon-green">$12M</div>
                  <div className="text-xs text-gray-500">Creator Earnings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-light">98%</div>
                  <div className="text-xs text-gray-500">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
