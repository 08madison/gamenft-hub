# GameNFT Hub

A stunning NFT marketplace for gaming digital assets. Built with React, TypeScript, Tailwind CSS, and GSAP animations.

![GameNFT Hub](https://yourusername.github.io/gamenft-hub/og-image.jpg)

## Features

- **Stunning Hero Section** - 3D card effects with mouse tracking and GSAP animations
- **Trending NFTs Gallery** - Interactive grid with hover effects and purchase functionality
- **Top Creators Showcase** - Featured creators with orbital constellation layout
- **Community Voice** - Comment system with likes and real-time interactions
- **Responsive Design** - Fully responsive for all devices
- **Dark Theme** - Cyberpunk-inspired dark UI with neon accents

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- GSAP (GreenSock Animation Platform)
- shadcn/ui components
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gamenft-hub.git
cd gamenft-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to **Settings > Pages** in your repository
4. Select **GitHub Actions** as the source
5. The site will automatically deploy on every push to `main`

### Option 2: Manual Deployment

1. Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/gamenft-hub"
```

2. Update the `base` field in `vite.config.ts`:
```typescript
base: '/gamenft-hub/',
```

3. Deploy:
```bash
npm run deploy
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── sections/       # Page sections
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── TrendingNFTs.tsx
│   ├── TopCreators.tsx
│   ├── CommunityVoice.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── data/          # Static data (NFTs, creators, comments)
├── types/         # TypeScript type definitions
├── hooks/         # Custom React hooks
├── App.tsx        # Main app component
└── index.css      # Global styles
```

## Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:

- **Primary Purple**: `#6B46C1`
- **Neon Green**: `#4ADE80`
- **Dark Background**: `#0F0F0F`

### Images

Replace images in the `public/` folder with your own:
- `hero-warrior.jpg` - Hero section featured NFT
- `nft-*.jpg` - NFT collection images
- `creator-*.jpg` - Creator avatars
- `user-*.jpg` - User avatars for comments

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Credits

- Design inspired by OpenSea, Blur, and other leading NFT marketplaces
- Images generated with AI
- Icons by [Lucide](https://lucide.dev/)
