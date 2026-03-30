export interface NFT {
  id: string;
  name: string;
  image: string;
  price: number;
  currency: string;
  creator: Creator;
  likes: number;
  category: string;
  description?: string;
}

export interface Creator {
  id: string;
  name: string;
  avatar: string;
  verified?: boolean;
  sales?: number;
}

export interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
}

export interface Stat {
  label: string;
  value: string;
}
