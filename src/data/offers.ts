import { Offer } from '../types';

// REPLACE: Swap placeholder offer data in /data/offers.ts
// DISABLE: Set status: 'inactive' on any offer to remove it from results without deleting
// ADJUST: Change internalPriority and historicalPerformance values to weight your top offers

export const offers: Offer[] = [
  // --- SURVEYS ---
  {
    id: 'swagbucks-1',
    name: 'Swagbucks',
    vertical: 'surveys',
    countries: ['US', 'UK', 'CA', 'AU', 'IE'],
    status: 'active',
    beginnerFriendly: true,
    tagline: 'Swagbucks offers users gift cards for taking polls, answering surveys, and more.',
    bullets: [
      'New users can earn a $5 sign up bonus',
      'Redeem rewards for products from over 200 brands',
      'Earn points for shopping, watching videos, and answering surveys'
    ],
    ctaText: 'Join now and start earning rewards today',
    placeholderLink: 'https://fqln4.bemobtrcks.com/go/d49ca004-ff2f-43cf-b751-3dc9873d119c',
    image: 'https://images.unsplash.com/photo-1579621970588-a3f5ce5a015e?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Match',
    experienceFit: { beginner: 10, intermediate: 8, advanced: 5 },
    riskFit: { noRisk: 10, lowRisk: 8, mediumRisk: 5, highRisk: 2 },
    timeFit: { low: 10, medium: 10, high: 7, serious: 4 },
    countryFit: { US: 10, CA: 9, UK: 9, AU: 8, IE: 8 },
    internalPriority: 10,
    historicalPerformance: 9
  },
  {
    id: 'inboxdollars-1',
    name: 'InboxDollars',
    vertical: 'surveys',
    countries: ['US'],
    status: 'active',
    beginnerFriendly: true,
    tagline: 'InboxDollars pays members to read emails, take surveys online, play games, and go shopping.',
    bullets: [
      'New users receive $5 just for joining',
      'Simply sign up and confirm your email to start',
      'Trusted platform active since 2000'
    ],
    ctaText: 'Sign up free and start earning from home',
    placeholderLink: 'https://fqln4.bemobtrcks.com/go/6ba23cdd-13fc-49a9-8533-b3ea595ea9c1',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    badge: 'Fast Start',
    experienceFit: { beginner: 10, intermediate: 7, advanced: 4 },
    riskFit: { noRisk: 10, lowRisk: 9, mediumRisk: 4, highRisk: 1 },
    timeFit: { low: 10, medium: 9, high: 6, serious: 3 },
    countryFit: { US: 10 },
    internalPriority: 9,
    historicalPerformance: 8
  },
  {
    id: 'maru-voice-ca',
    name: 'Maru Voice Canada',
    vertical: 'surveys',
    countries: ['CA'],
    status: 'active',
    beginnerFriendly: true,
    tagline: 'Share your opinions through surveys and earn rewards for your input.',
    bullets: [
      'New users receive 500 bonus points upon joining',
      'Influence brands and services in Canada',
      'Redeem points for gift cards or cash'
    ],
    ctaText: 'Join the panel and get rewarded for your opinions',
    placeholderLink: '#placeholder-maru-voice',
    image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=800&q=80',
    badge: 'Canadian Exclusive',
    experienceFit: { beginner: 10, intermediate: 9, advanced: 7 },
    riskFit: { noRisk: 10, lowRisk: 8, mediumRisk: 2, highRisk: 1 },
    timeFit: { low: 9, medium: 9, high: 5, serious: 2 },
    countryFit: { CA: 10 },
    internalPriority: 8,
    historicalPerformance: 8
  },
  {
    id: 'king-opinion-surveoo',
    name: 'King Opinion / Surveoo',
    vertical: 'surveys',
    countries: ['ALL', 'ZA', 'UK', 'US', 'CA', 'IN', 'NG'],
    status: 'active',
    beginnerFriendly: true,
    tagline: 'Global online platform that rewards users for completing paid surveys, daily polls, and sharing their opinions.',
    bullets: [
      'Users have the opportunity to earn up to $225 every month',
      'Share your opinions on various products and brands',
      'Available globally in multiple countries'
    ],
    ctaText: 'Start earning by sharing your opinions online',
    placeholderLink: 'https://fqln4.bemobtrcks.com/go/06ec63d4-8757-4962-9be7-e71e290b2375?ad_id={{ad.id}}&adset_id={{adset.id}}&campaign_id={{campaign.id}}&ad_name={{ad.name}}&adset_name={{adset.name}}&campaign_name={{campaign.name}}',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    badge: 'Global Choice',
    experienceFit: { beginner: 9, intermediate: 8, advanced: 7 },
    riskFit: { noRisk: 10, lowRisk: 8, mediumRisk: 3, highRisk: 1 },
    timeFit: { low: 8, medium: 9, high: 8, serious: 5 },
    countryFit: { US: 9, CA: 9, UK: 9, ZA: 9, IN: 8, NG: 8 },
    internalPriority: 9,
    historicalPerformance: 8
  },
  {
    id: 'survey-a',
    name: 'Survey Club',
    vertical: 'surveys',
    countries: ['US', 'CA', 'AU'],
    status: 'active',
    beginnerFriendly: true,
    tagline: 'Survey Club connects you with survey companies looking for new users. The more you complete, the more you earn.',
    bullets: [
      'Simple, straightforward interface',
      'Cash out via PayPal or e-Giftcards',
      'Millions of active members globally'
    ],
    ctaText: 'Start Sharing Opinions',
    placeholderLink: '#placeholder-survey-a',
    image: 'https://images.unsplash.com/photo-1534342525164-9ed3265ef2ee?auto=format&fit=crop&w=800&q=80',
    badge: 'Low Commitment',
    experienceFit: { beginner: 9, intermediate: 8, advanced: 6 },
    riskFit: { noRisk: 10, lowRisk: 7, mediumRisk: 3, highRisk: 1 },
    timeFit: { low: 9, medium: 9, high: 5, serious: 2 },
    countryFit: { US: 9, CA: 9, AU: 8 },
    internalPriority: 7,
    historicalPerformance: 7
  },
  {
    id: 'honeygain-1',
    name: 'Honeygain',
    vertical: 'surveys',
    countries: ['ALL'],
    status: 'active',
    beginnerFriendly: true,
    tagline: 'Earn passive income online just by sharing your internet connection.',
    bullets: [
      '100% passive income after installation',
      'Available on Windows, macOS, Android, and iOS',
      'Strictly protects your personal data'
    ],
    ctaText: 'Start Earning Passive Income',
    placeholderLink: 'https://join.honeygain.com/TRONI90DDA',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    badge: 'Passive Income',
    experienceFit: { beginner: 10, intermediate: 9, advanced: 8 },
    riskFit: { noRisk: 10, lowRisk: 8, mediumRisk: 3, highRisk: 1 },
    timeFit: { low: 10, medium: 10, high: 10, serious: 10 },
    countryFit: { US: 10, UK: 10, CA: 10, AU: 10, ZA: 10 },
    internalPriority: 9,
    historicalPerformance: 8
  },

  // --- CRYPTO ---
  {
    id: 'binance-1',
    name: 'Binance',
    vertical: 'crypto',
    countries: ['ALL'],
    status: 'active',
    beginnerFriendly: true,
    tagline: 'Trade with the lowest fees on the world\'s largest crypto exchange.',
    bullets: [
      'Access hundreds of different coins and tokens',
      'Advanced charting and trading tools',
      'Earn passive yield on your digital assets'
    ],
    ctaText: 'Create Free Account',
    placeholderLink: 'https://www.binance.com/register?ref=R1EEQLPF',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80',
    badge: 'Higher Earning Potential',
    experienceFit: { beginner: 4, intermediate: 9, advanced: 10 },
    riskFit: { noRisk: 1, lowRisk: 3, mediumRisk: 7, highRisk: 10 },
    timeFit: { low: 3, medium: 7, high: 10, serious: 10 },
    countryFit: { US: 2, UK: 10, AU: 10, ZA: 10 }, 
    internalPriority: 10,
    historicalPerformance: 9
  },
  {
    id: 'bybit-1',
    name: 'Bybit',
    vertical: 'crypto',
    countries: ['ALL'],
    status: 'active',
    beginnerFriendly: false,
    tagline: 'Next-level cryptocurrency trading with innovative spot and derivatives markets.',
    bullets: [
      'High liquidity and ultra-fast matching engine',
      'Lucrative welcome bonuses',
      'Advanced charting & API features'
    ],
    ctaText: 'Start Trading on Bybit',
    placeholderLink: 'https://partner.bybit.com/b/facbook',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=800&q=80',
    badge: 'Advanced Options',
    experienceFit: { beginner: 5, intermediate: 9, advanced: 10 },
    riskFit: { noRisk: 1, lowRisk: 3, mediumRisk: 8, highRisk: 10 },
    timeFit: { low: 4, medium: 7, high: 9, serious: 9 },
    countryFit: { UK: 9, AU: 9, CA: 9, ZA: 9 },
    internalPriority: 9,
    historicalPerformance: 8
  },
  {
    id: 'coinbase-1',
    name: 'Coinbase',
    vertical: 'crypto',
    countries: ['US', 'CA', 'UK', 'AU'],
    status: 'active',
    beginnerFriendly: true,
    tagline: 'The easiest and most trusted place to buy, sell, and manage your crypto.',
    bullets: [
      'Learn about crypto and earn free tokens',
      'Industry-leading security and insurance',
      'Simple interface perfect for your first purchase'
    ],
    ctaText: 'Get Started with Crypto',
    placeholderLink: 'https://www.coinbase.com/',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80',
    badge: 'Beginner Friendly',
    experienceFit: { beginner: 10, intermediate: 8, advanced: 6 },
    riskFit: { noRisk: 1, lowRisk: 4, mediumRisk: 8, highRisk: 10 },
    timeFit: { low: 5, medium: 8, high: 9, serious: 7 },
    countryFit: { US: 10, UK: 9, CA: 9, AU: 9 },
    internalPriority: 9,
    historicalPerformance: 9
  },

  // --- FOREX ---
  {
    id: 'exness-1',
    name: 'Exness',
    vertical: 'forex',
    countries: ['ALL'],
    status: 'active',
    beginnerFriendly: false,
    tagline: 'Trade forex, crypto, and stocks with one of the most trusted global brokers.',
    bullets: [
      'Instant withdrawals and deposits',
      'Tight spreads starting from 0 pips',
      'Customizable leverage options'
    ],
    ctaText: 'Open a Live Account',
    placeholderLink: 'https://one.exnessonelink.com/a/uc5s2t5uca',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    badge: 'Global Broker',
    experienceFit: { beginner: 4, intermediate: 8, advanced: 10 },
    riskFit: { noRisk: 1, lowRisk: 2, mediumRisk: 8, highRisk: 10 },
    timeFit: { low: 2, medium: 6, high: 10, serious: 10 },
    countryFit: { UK: 8, AU: 8, ZA: 10 },
    internalPriority: 10,
    historicalPerformance: 9
  },
  {
    id: 'ftmo-1',
    name: 'FTMO',
    vertical: 'forex',
    countries: ['ALL'],
    status: 'active',
    beginnerFriendly: false,
    tagline: 'Get funded up to $200,000 to trade Forex, Crypto, and Stocks with leading prop firm.',
    bullets: [
      'Keep up to 90% of your profits',
      'Robust trading platform & analysis tools',
      'Trade with firm capital with strict risk rules'
    ],
    ctaText: 'Start FTMO Challenge',
    placeholderLink: 'https://trader.ftmo.com/?affiliates=lDIwohGKhphsfwpozoyc',
    image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=800&q=80',
    badge: 'Top Prop Firm',
    experienceFit: { beginner: 2, intermediate: 9, advanced: 10 },
    riskFit: { noRisk: 4, lowRisk: 6, mediumRisk: 8, highRisk: 6 },
    timeFit: { low: 1, medium: 8, high: 10, serious: 10 },
    countryFit: { US: 10, UK: 10, CA: 10, AU: 10, ZA: 9 },
    internalPriority: 10,
    historicalPerformance: 9
  },
  {
    id: 'xm-1',
    name: 'XM',
    vertical: 'forex',
    countries: ['ALL'],
    status: 'active',
    beginnerFriendly: false,
    tagline: 'Award-winning forex and CFD broker with over 1000 instruments.',
    bullets: [
      'Start trading with competitive spreads',
      'Access MetaTrader 4 & 5',
      'Daily market analysis and signals'
    ],
    ctaText: 'Trade with XM',
    placeholderLink: 'https://www.xm.com/', // Empty from user, placeholder
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    badge: 'Trusted Provider',
    experienceFit: { beginner: 4, intermediate: 8, advanced: 9 },
    riskFit: { noRisk: 1, lowRisk: 2, mediumRisk: 8, highRisk: 10 },
    timeFit: { low: 3, medium: 6, high: 9, serious: 9 },
    countryFit: { UK: 8, ZA: 9, AU: 8 },
    internalPriority: 8,
    historicalPerformance: 8
  },
  {
    id: 'atmos-funded-1',
    name: 'Atmos-Funded',
    vertical: 'forex',
    countries: ['ALL'],
    status: 'active',
    beginnerFriendly: false,
    tagline: 'Prove your trading skills and earn funding with our simple, transparent evaluation.',
    bullets: [
      'No time limits on challenges',
      'Scalable capital limits',
      'Fast bi-weekly payouts'
    ],
    ctaText: 'Get Funded Today',
    placeholderLink: 'https://affiliate.atmosfunded.com/s/bnOJR',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80',
    badge: 'Fast Start',
    experienceFit: { beginner: 3, intermediate: 9, advanced: 10 },
    riskFit: { noRisk: 5, lowRisk: 7, mediumRisk: 7, highRisk: 5 },
    timeFit: { low: 2, medium: 8, high: 10, serious: 10 },
    countryFit: { US: 9, UK: 9, CA: 9 },
    internalPriority: 9,
    historicalPerformance: 8
  },

  // --- SWEEPSTAKES ---
  {
    id: 'sweeps-a',
    name: 'National Consumer Center',
    vertical: 'sweepstakes',
    countries: ['US', 'UK', 'CA'],
    status: 'active',
    beginnerFriendly: true,
    tagline: 'Provide your feedback to unlock daily prize draws and samples.',
    bullets: [
      '100% free to enter and participate',
      'Weekly tech and gift card giveaways',
      'Simple form completion process'
    ],
    ctaText: 'Enter Now',
    placeholderLink: '#placeholder-sweeps-a',
    badge: 'Fast Start',
    experienceFit: { beginner: 10, intermediate: 9, advanced: 7 },
    riskFit: { noRisk: 10, lowRisk: 9, mediumRisk: 5, highRisk: 2 },
    timeFit: { low: 10, medium: 8, high: 4, serious: 2 },
    countryFit: { US: 10, UK: 9, CA: 8 },
    internalPriority: 9,
    historicalPerformance: 9
  },
  {
    id: 'sweeps-b',
    name: 'Reward Hunter',
    vertical: 'sweepstakes',
    countries: ['ALL'],
    status: 'active',
    beginnerFriendly: true,
    tagline: 'Discover exclusive opportunities to win big today.',
    bullets: [
      'New draws added every single day',
      'Various prize tiers available',
      'Quick email signup required'
    ],
    ctaText: 'Claim Free Entry',
    placeholderLink: '#placeholder-sweeps-b',
    badge: 'Bonus Available',
    experienceFit: { beginner: 10, intermediate: 8, advanced: 6 },
    riskFit: { noRisk: 10, lowRisk: 8, mediumRisk: 4, highRisk: 2 },
    timeFit: { low: 10, medium: 7, high: 4, serious: 1 },
    countryFit: { US: 8, UK: 8, AU: 8, ZA: 8 },
    internalPriority: 7,
    historicalPerformance: 6
  },
  {
    id: 'sweeps-c',
    name: 'Daily Sweeps',
    vertical: 'sweepstakes',
    countries: ['US'],
    status: 'active',
    beginnerFriendly: true,
    tagline: 'Your chance to win daily gift cards and tech items.',
    bullets: [
      'Winners announced every Friday',
      'Partnered with major retail brands',
      'No complicated surveys required'
    ],
    ctaText: 'View Today\'s Prizes',
    placeholderLink: '#placeholder-sweeps-c',
    badge: 'Popular in Your Country',
    experienceFit: { beginner: 10, intermediate: 8, advanced: 5 },
    riskFit: { noRisk: 10, lowRisk: 8, mediumRisk: 4, highRisk: 1 },
    timeFit: { low: 10, medium: 8, high: 4, serious: 1 },
    countryFit: { US: 10 },
    internalPriority: 8,
    historicalPerformance: 8
  },

  // --- CASINO/BETTING (Placeholders) ---
  {
    id: 'casino-a',
    name: 'Jackpot City',
    vertical: 'casino',
    countries: ['CA', 'NZ', 'IE', 'Other'],
    status: 'active',
    beginnerFriendly: false,
    tagline: 'Premium entertainment with generous welcome packages.',
    bullets: [
      'Huge variety of premium games',
      'Massive progressive network',
      'Secure, fast withdrawal options'
    ],
    ctaText: 'Claim Welcome Package',
    placeholderLink: '#placeholder-casino-a',
    badge: 'Bonus Available',
    experienceFit: { beginner: 6, intermediate: 9, advanced: 10 },
    riskFit: { noRisk: 1, lowRisk: 2, mediumRisk: 8, highRisk: 10 },
    timeFit: { low: 5, medium: 8, high: 10, serious: 8 },
    countryFit: { CA: 10, NZ: 10, IE: 9 },
    internalPriority: 8,
    historicalPerformance: 8
  },
  {
    id: 'betting-b',
    name: 'Betway',
    vertical: 'casino',
    countries: ['UK', 'IE', 'ZA', 'Other'],
    status: 'active',
    beginnerFriendly: false,
    tagline: 'The ultimate sports and casino destination.',
    bullets: [
      'Competitive odds on global sports',
      'Thousands of live events weekly',
      'Premium live dealer experience'
    ],
    ctaText: 'Get Signup Bonus',
    placeholderLink: '#placeholder-betting-b',
    badge: 'Popular in Your Country',
    experienceFit: { beginner: 6, intermediate: 9, advanced: 9 },
    riskFit: { noRisk: 1, lowRisk: 2, mediumRisk: 7, highRisk: 10 },
    timeFit: { low: 4, medium: 8, high: 10, serious: 9 },
    countryFit: { UK: 10, ZA: 10, IE: 9 },
    internalPriority: 9,
    historicalPerformance: 9
  },
  {
    id: 'casino-c',
    name: 'Spin Casino',
    vertical: 'casino',
    countries: ['CA', 'NZ', 'IE'],
    status: 'active',
    beginnerFriendly: false,
    tagline: 'Daily rewards and an unmatched gaming variety.',
    bullets: [
      'Exclusive daily match bonuses',
      'Hundreds of mobile-optimized slots',
      '24/7 VIP customer support'
    ],
    ctaText: 'Unlock Free Spins',
    placeholderLink: '#placeholder-casino-c',
    badge: 'Best Match',
    experienceFit: { beginner: 6, intermediate: 8, advanced: 9 },
    riskFit: { noRisk: 1, lowRisk: 2, mediumRisk: 8, highRisk: 10 },
    timeFit: { low: 6, medium: 8, high: 9, serious: 8 },
    countryFit: { CA: 9, NZ: 9 },
    internalPriority: 7,
    historicalPerformance: 7
  }
];
