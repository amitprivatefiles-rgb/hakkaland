/**
 * HakkaLand — every business detail in one place.
 * Items marked CONFIRM still need the owner's sign-off.
 */
const mapsQuery = encodeURIComponent('Hakkaland, Star Mall, Jessore Road, Madhyamgram, Kolkata 700129');

export const SITE = {
  name: 'HakkaLand',
  fullName: 'HakkaLand — Restaurant cum Bar',
  tagline: 'Chinese · Thai · Tandoori',

  phone: '+91 74399 91345', // from the District listing
  phoneClean: '917439991345',
  whatsappUrl: 'https://wa.me/917439991345',

  address: {
    line1: '5th Floor, Star Mall',
    line2: 'Jessore Road, Sisir Kunja',
    line3: 'Madhyamgram, Kolkata',
    state: 'West Bengal',
    pin: '700129',
    full: '5th Floor, Star Mall, Jessore Road, Sisir Kunja, Madhyamgram, Kolkata, West Bengal 700129',
  },

  // CONFIRM with the owner
  hours: 'Open daily, 12 noon – 11 pm',

  costForTwo: '₹1,000',

  ratings: [
    { score: 4.2, count: 348, label: 'District' },
    { score: 4.1, count: 570, label: 'Restaurant Guru' },
  ],

  cuisines: ['Chinese', 'Thai', 'Asian', 'North Indian'],
  priceRange: '₹₹',

  mapEmbedUrl: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,

  geo: { latitude: 22.6839, longitude: 88.4531 },

  // CONFIRM: add real profile links; empty ones are hidden on the site
  socials: { instagram: '', zomato: '', district: '' },
} as const;

/** WhatsApp link with a pre-filled message. */
export const wa = (text: string) => `${SITE.whatsappUrl}?text=${encodeURIComponent(text)}`;
export type Site = typeof SITE;
