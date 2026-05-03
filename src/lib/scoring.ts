import { Offer, Vertical } from '../types';
import { offers } from '../data/offers';

interface Answers {
  goal: string;
  country: string;
  experience: string;
  risk: string;
  time: string;
}

export function scoreOffers(answers: Answers): {
  primary: Offer | null;
  secondary: Offer[];
  crossSell: string | null;
} {
  // Step 1 — Score each vertical
  const verticalScores: Record<Vertical, number> = {
    surveys: 0,
    crypto: 0,
    forex: 0,
    sweepstakes: 0,
    casino: 0,
  };

  // Goal scoring
  switch (answers.goal) {
    case 'Easy extra cash':
      verticalScores.surveys += 40;
      verticalScores.crypto += 0;
      verticalScores.forex += 0;
      verticalScores.sweepstakes += 20;
      verticalScores.casino += 0;
      break;
    case 'Higher income potential':
      verticalScores.surveys += 0;
      verticalScores.crypto += 35;
      verticalScores.forex += 35;
      verticalScores.sweepstakes += 0;
      verticalScores.casino += 10;
      break;
    case 'Prizes and giveaways':
      verticalScores.surveys += 10;
      verticalScores.crypto += 0;
      verticalScores.forex += 0;
      verticalScores.sweepstakes += 40;
      verticalScores.casino += 5;
      break;
    case 'Betting or casino bonuses':
      verticalScores.surveys += 0;
      verticalScores.crypto += 0;
      verticalScores.forex += 0;
      verticalScores.sweepstakes += 5;
      verticalScores.casino += 45;
      break;
    case "I'm open to the best option":
      verticalScores.surveys += 15;
      verticalScores.crypto += 15;
      verticalScores.forex += 15;
      verticalScores.sweepstakes += 15;
      verticalScores.casino += 15;
      break;
  }

  // Experience scoring
  switch (answers.experience) {
    case 'Beginner':
      verticalScores.surveys += 25;
      verticalScores.crypto -= 10;
      verticalScores.forex -= 15;
      verticalScores.sweepstakes += 20;
      verticalScores.casino -= 5;
      break;
    case 'Intermediate':
      verticalScores.surveys += 10;
      verticalScores.crypto += 10;
      verticalScores.forex += 10;
      verticalScores.sweepstakes += 10;
      verticalScores.casino += 5;
      break;
    case 'Advanced':
      verticalScores.surveys += 0;
      verticalScores.crypto += 20;
      verticalScores.forex += 20;
      verticalScores.sweepstakes += 0;
      verticalScores.casino += 15;
      break;
  }

  // Risk scoring
  switch (answers.risk) {
    case 'No risk':
      verticalScores.surveys += 35;
      verticalScores.crypto -= 20;
      verticalScores.forex -= 20;
      verticalScores.sweepstakes += 20;
      verticalScores.casino -= 30;
      break;
    case 'Low risk':
      verticalScores.surveys += 20;
      verticalScores.crypto -= 5;
      verticalScores.forex -= 5;
      verticalScores.sweepstakes += 15;
      verticalScores.casino -= 10;
      break;
    case 'Medium risk':
      verticalScores.surveys += 5;
      verticalScores.crypto += 15;
      verticalScores.forex += 15;
      verticalScores.sweepstakes += 5;
      verticalScores.casino += 10;
      break;
    case 'High risk':
      verticalScores.surveys -= 10;
      verticalScores.crypto += 25;
      verticalScores.forex += 25;
      verticalScores.sweepstakes -= 5;
      verticalScores.casino += 30;
      break;
  }

  // Time scoring
  switch (answers.time) {
    case '5–10 min/day':
    case '5–10 minutes a day':
      verticalScores.surveys += 25;
      verticalScores.crypto -= 5;
      verticalScores.forex -= 5;
      verticalScores.sweepstakes += 20;
      verticalScores.casino += 0;
      break;
    case '30–60 min/day':
    case '30–60 minutes a day':
      verticalScores.surveys += 10;
      verticalScores.crypto += 10;
      verticalScores.forex += 10;
      verticalScores.sweepstakes += 10;
      verticalScores.casino += 5;
      break;
    case 'Few hours/week':
    case 'A few hours a week':
      verticalScores.surveys += 5;
      verticalScores.crypto += 10;
      verticalScores.forex += 10;
      verticalScores.sweepstakes += 5;
      verticalScores.casino += 10;
      break;
    case 'Serious time':
    case "I'm willing to invest serious time":
      verticalScores.surveys += 0;
      verticalScores.crypto += 20;
      verticalScores.forex += 20;
      verticalScores.sweepstakes += 0;
      verticalScores.casino += 10;
      break;
  }

  // Step 2 — Apply country boost
  // ADJUST: Country boost weights in /lib/scoring.ts can be tuned per GEO performance
  const countryCode = answers.country;
  switch (countryCode) {
    case 'US':
    case 'United States':
      verticalScores.surveys += 15;
      verticalScores.sweepstakes += 15;
      verticalScores.casino += 10;
      verticalScores.crypto += 5;
      verticalScores.forex += 5;
      break;
    case 'CA':
    case 'Canada':
      verticalScores.surveys += 15;
      verticalScores.sweepstakes += 10;
      verticalScores.crypto += 5;
      verticalScores.forex += 5;
      break;
    case 'UK':
    case 'United Kingdom':
      verticalScores.surveys += 10;
      verticalScores.casino += 10;
      verticalScores.crypto += 10;
      verticalScores.forex += 10;
      verticalScores.sweepstakes += 5;
      break;
    case 'AU':
    case 'Australia':
      verticalScores.surveys += 10;
      verticalScores.crypto += 10;
      verticalScores.forex += 10;
      verticalScores.casino += 5;
      verticalScores.sweepstakes += 5;
      break;
    case 'ZA':
    case 'South Africa':
      verticalScores.crypto += 15;
      verticalScores.forex += 15;
      verticalScores.surveys += 5;
      verticalScores.casino += 5;
      break;
    default:
      // Other: no boost
      break;
  }

  // Step 3 — Identify best vertical
  let bestVertical: Vertical = 'surveys';
  let highestScore = -Infinity;

  Object.entries(verticalScores).forEach(([v, score]) => {
    if (score > highestScore) {
      highestScore = score;
      bestVertical = v as Vertical;
    }
  });

  const mapCountryName = (name: string) => {
      const map: Record<string,string> = {'United States': 'US', 'Canada': 'CA', 'United Kingdom': 'UK', 'Australia': 'AU', 'Ireland': 'IE', 'South Africa': 'ZA', 'New Zealand': 'NZ'};
      return map[name] || name;
  }

  const cCode = mapCountryName(answers.country);

  // Read disabled offers from localStorage
  let disabledOffers: string[] = [];
  try {
    const stored = localStorage.getItem('campuscash_disabled_offers');
    if (stored) {
      disabledOffers = JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to read disabled offers", e);
  }

  // Step 4 — Filter eligible offers
  let eligibleOffers = offers.filter(o => 
    o.status === 'active' && 
    !disabledOffers.includes(o.id) &&
    (o.countries.includes('ALL') || o.countries.includes(cCode) || 
     (cCode.length > 2 && o.countries.some(c => cCode.startsWith(c)))) // rudimentary mapping if they input long string
  );

  // If no offers in best vertical, fall back to any eligible
  let verticalOffers = eligibleOffers.filter(o => o.vertical === bestVertical);
  if (verticalOffers.length === 0) {
    verticalOffers = eligibleOffers;
  }

  // Map answer string to fit key
  const getExpKey = (exp: string) => exp.toLowerCase().includes('beginner') ? 'beginner' : exp.toLowerCase().includes('intermediate') ? 'intermediate' : 'advanced';
  const getRiskKey = (risk: string) => risk.toLowerCase().includes('no') ? 'noRisk' : risk.toLowerCase().includes('low') ? 'lowRisk' : risk.toLowerCase().includes('medium') ? 'mediumRisk' : 'highRisk';
  const getTimeKey = (time: string) => time.includes('5') ? 'low' : time.includes('30') ? 'medium' : time.includes('few') ? 'high' : 'serious';

  const expKey = getExpKey(answers.experience);
  const riskKey = getRiskKey(answers.risk);
  const timeKey = getTimeKey(answers.time);

  // Step 5 — Score each eligible offer
  const scoredOffers = verticalOffers.map(offer => {
    const vScore = verticalScores[offer.vertical];
    const cFit = offer.countryFit[cCode] || 5; // Default to 5 if not specified
    const expFit = offer.experienceFit[expKey] || 5;
    const riskFit = offer.riskFit[riskKey] || 5;
    const timeFit = offer.timeFit[timeKey] || 5;

    const offerScore = 
      (vScore * 0.40) + 
      (cFit * 0.20) + 
      (expFit * 0.10) + 
      (riskFit * 0.10) + 
      (timeFit * 0.05) + 
      (offer.internalPriority * 0.10) + 
      (offer.historicalPerformance * 0.05);

    return { offer, score: offerScore };
  });

  // Step 6 — Return results
  scoredOffers.sort((a, b) => b.score - a.score);

  const finalOffers = scoredOffers.map(so => so.offer);
  
  const primary = finalOffers.length > 0 ? finalOffers[0] : null;
  const secondary = finalOffers.slice(1, 3);
  
  // Cross sell label
  let crossSell = null;
  if (primary?.vertical === 'surveys' || primary?.vertical === 'sweepstakes') {
      crossSell = 'Looking for higher earning potential? Explore Crypto & Forex';
  } else if (primary?.vertical === 'crypto' || primary?.vertical === 'forex') {
      crossSell = 'Looking for an easy place to start? Try premium Surveys';
  } else {
      crossSell = 'Explore other top-rated categories';
  }

  return { primary, secondary, crossSell };
}
