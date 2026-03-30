import { useEffect, useRef, useState } from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { nfts } from '@/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TrendingNFTs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.trending-title', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Cards stagger animation
      gsap.from('.nft-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: scrollRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBuyClick = (nftName: string) => {
    alert(`Initiating purchase for ${nftName}...\n\nIn a real application, this would connect to your wallet and process the transaction on the blockchain.`);
  };

  return (
    <section
      ref={sectionRef}
      id="marketplace"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-green/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="trending-title">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Trending <span className="gradient-text">Now</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              Discover the hottest gaming NFTs trending in the marketplace. 
              Own unique digital assets from top creators.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-purple text-purple hover:bg-purple hover:text-white transition-all w-fit"
          >
            View All
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* NFT Grid */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {nfts.map((nft, index) => (
            <div
              key={nft.id}
              className={`nft-card group relative ${
                index % 2 === 1 ? 'lg:mt-8' : ''
              }`}
              onMouseEnter={() => setHoveredId(nft.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r from-purple via-neon-green to-purple rounded-2xl blur-lg opacity-0 transition-opacity duration-500 ${
                  hoveredId === nft.id ? 'opacity-50' : ''
                }`}
              />

              {/* Card */}
              <div className="relative glass rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-card-glow">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-dark/80 backdrop-blur-sm text-xs text-white rounded-full border border-white/10">
                      {nft.category}
                    </span>
                  </div>

                  {/* Like Button */}
                  <button className="absolute top-4 right-4 p-2 bg-dark/60 backdrop-blur-sm rounded-full transition-all hover:bg-dark hover:scale-110">
                    <Heart className="w-4 h-4 text-white" />
                  </button>

                  {/* Hover Info */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="glass-strong rounded-xl p-4">
                      <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                        {nft.description}
                      </p>
                      <Button
                        onClick={() => handleBuyClick(nft.name)}
                        className="w-full bg-neon-green text-dark font-semibold hover:bg-neon-green/90"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                    {nft.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={nft.creator.avatar}
                        alt={nft.creator.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-gray-400">{nft.creator.name}</span>
                      {nft.creator.verified && (
                        <span className="text-neon-green text-xs">✓</span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-neon-green font-semibold">{nft.price} {nft.currency}</div>
                      <div className="text-xs text-gray-500">{nft.likes} likes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
