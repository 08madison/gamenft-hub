import type { NFT, Creator, Comment } from '@/types';

export const nfts: NFT[] = [
  {
    id: '1',
    name: 'Cyber Warrior',
    image: '/hero-warrior.jpg',
    price: 2.5,
    currency: 'ETH',
    creator: {
      id: 'c1',
      name: 'Alex Chen',
      avatar: '/creator-alex.jpg',
      verified: true,
    },
    likes: 1234,
    category: 'Characters',
    description: 'A legendary cybernetic warrior from the Neon District. Equipped with advanced plasma weaponry and impenetrable armor.',
  },
  {
    id: '2',
    name: 'Street Artist',
    image: '/nft-street-artist.jpg',
    price: 1.8,
    currency: 'ETH',
    creator: {
      id: 'c2',
      name: 'Sarah Kim',
      avatar: '/creator-sarah.jpg',
      verified: true,
    },
    likes: 892,
    category: 'Characters',
    description: 'The master of digital graffiti. This artist brings color to the gray metropolis.',
  },
  {
    id: '3',
    name: 'Neon Samurai',
    image: '/nft-samurai.jpg',
    price: 3.2,
    currency: 'ETH',
    creator: {
      id: 'c3',
      name: 'Marcus Johnson',
      avatar: '/creator-marcus.jpg',
      verified: true,
    },
    likes: 2156,
    category: 'Characters',
    description: 'Ancient honor meets future technology. The Neon Samurai protects the digital realm.',
  },
  {
    id: '4',
    name: 'Digital Mage',
    image: '/nft-dreamer.jpg',
    price: 1.5,
    currency: 'ETH',
    creator: {
      id: 'c4',
      name: 'Yuki Tanaka',
      avatar: '/creator-yuki.jpg',
      verified: true,
    },
    likes: 756,
    category: 'Characters',
    description: 'Wielder of arcane algorithms and mystical code. The Digital Mage bends reality itself.',
  },
  {
    id: '5',
    name: 'Pixel Pioneer',
    image: '/nft-pioneer.jpg',
    price: 0.8,
    currency: 'ETH',
    creator: {
      id: 'c5',
      name: 'Emma Wilson',
      avatar: '/creator-emma.jpg',
      verified: true,
    },
    likes: 543,
    category: 'Characters',
    description: 'From the retro gaming era, this voxel warrior brings nostalgia to the blockchain.',
  },
  {
    id: '6',
    name: 'Glitch Goddess',
    image: '/nft-glitch-goddess.jpg',
    price: 4.0,
    currency: 'ETH',
    creator: {
      id: 'c1',
      name: 'Alex Chen',
      avatar: '/creator-alex.jpg',
      verified: true,
    },
    likes: 3421,
    category: 'Characters',
    description: 'A deity of digital chaos. The Glitch Goddess exists between pixels and reality.',
  },
];

export const creators: Creator[] = [
  {
    id: 'c1',
    name: 'Alex Chen',
    avatar: '/creator-alex.jpg',
    verified: true,
    sales: 1250,
  },
  {
    id: 'c2',
    name: 'Sarah Kim',
    avatar: '/creator-sarah.jpg',
    verified: true,
    sales: 890,
  },
  {
    id: 'c3',
    name: 'Marcus Johnson',
    avatar: '/creator-marcus.jpg',
    verified: true,
    sales: 2100,
  },
  {
    id: 'c4',
    name: 'Yuki Tanaka',
    avatar: '/creator-yuki.jpg',
    verified: true,
    sales: 650,
  },
  {
    id: 'c5',
    name: 'Emma Wilson',
    avatar: '/creator-emma.jpg',
    verified: true,
    sales: 430,
  },
];

export const comments: Comment[] = [
  {
    id: '1',
    user: {
      name: 'Jordan Lee',
      avatar: '/user-jordan.jpg',
    },
    content: 'Just bought my first NFT here! The collection is absolutely stunning. The Cyber Warrior is going to be a great addition to my gallery.',
    timestamp: '2 hours ago',
    likes: 24,
  },
  {
    id: '2',
    user: {
      name: 'Maria Garcia',
      avatar: '/user-maria.jpg',
    },
    content: 'The attention to detail in these gaming NFTs is incredible. GameNFT Hub has the best curated collection I\'ve seen!',
    timestamp: '5 hours ago',
    likes: 56,
  },
  {
    id: '3',
    user: {
      name: 'Tom Anderson',
      avatar: '/user-tom.jpg',
    },
    content: 'Been collecting NFTs for 3 years and this platform stands out. Smooth transactions and amazing artwork. Highly recommended!',
    timestamp: '1 day ago',
    likes: 89,
  },
];

export const stats = [
  { label: 'Assets', value: '50k+' },
  { label: 'Creators', value: '20k+' },
  { label: 'Players', value: '100k+' },
  { label: 'Volume', value: '25M+' },
];
